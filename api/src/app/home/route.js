import { NextResponse } from "next/server";

export async function GET(request, response) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello Tiger" }, { status: 200 });
}
