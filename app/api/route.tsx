import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  /* Write your code here to get the users from GITHUB API*/
  return NextResponse.json({ message: "Hello World" });
}
