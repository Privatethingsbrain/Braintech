import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import typesPayment from "../configs/typesPayment";

export async function GET(request, response) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request, response) {
  // Do whatever you want
  const reqBody = await request.json();
  if (!reqBody.type) {
    return NextResponse.json(
      { message: "No Payment Type Found" },
      { status: 201 }
    );
  }
  const type1 = reqBody.type;
  if (!Object.keys(typesPayment).includes(type1)) {
    return NextResponse.json({ message: "Wrong Type Given" }, { status: 201 });
  }
  try {
    console.log("HIT /create-order, of type:", type1);
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const { amount, currency, receipt } = typesPayment[type1];
    const notes = reqBody.notes;

    const options = {
      amount: amount * 100, // Convert amount to paise
      currency,
      receipt,
      notes,
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json({ ...order }, { status: 201 });
  } catch (e) {
    console.error("Error: ", e);
    return NextResponse.json({ message: "fail" }, { status: 401 });
  }
}
