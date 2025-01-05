import Razorpay from "razorpay";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import typesPayment from "../configs/typesPayment";

async function pushRow(newRow, count = 0) {
  if (count === 3) {
    return;
  }
  try {
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID_RAZORPAY;
    const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID_RAZORPAY;
    const serviceAccountAuth = new JWT({
      email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(newRow);
    console.log("New Row added!", newRow);
  } catch (error) {
    console.log("Error: ", error.message);
    await pushRow(newRow, count + 1);
  }
}

export async function GET(request, response) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request, response) {
  // Do whatever you want
  const reqBody = await request.json();
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      reqBody;
    const secret = razorpay.key_secret;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const isValidSignature = validateWebhookSignature(
      body,
      razorpay_signature,
      secret
    );
    console.log(isValidSignature);
    if (isValidSignature) {
      // Update the order with payment details
      const rowBody = {
        Name: reqBody.name,
        Email: reqBody.email,
        Mobile: reqBody.phone,
        "TradingView Username": reqBody.tradingViewName,
        Status: "paid",
        "Razorpay Order Id": razorpay_order_id,
        "Razorpay Payment Id": razorpay_payment_id,
        "Razorpay Signature": razorpay_signature,
        Note: reqBody.note,
        "Strategy Type": reqBody.type,
        "Amount Paid":
          typesPayment[reqBody.type].currency +
          " " +
          typesPayment[reqBody.type].amount,
      };
      console.log("Payment verification successful");
      try {
        await pushRow(rowBody);
        console.log("Uploaded to Google Sheets");
      } catch (error) {
        console.log("Error: ", error.message);
      }
      return NextResponse.json({ status: "ok" }, { status: 201 });
    } else {
      console.log("Payment verification failed");
      return NextResponse.json(
        { status: "verification_failed" },
        { status: 201 }
      );
    }
  } catch (e) {
    console.error("Error: ", e);
    return NextResponse.json({ status: "fail" }, { status: 401 });
  }
}
