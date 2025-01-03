import Razorpay from "razorpay";
import { NextResponse } from "next/server";

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
    const { amount, currency, receipt, notes } = reqBody;

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
