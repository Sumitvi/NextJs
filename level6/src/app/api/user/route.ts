import { NextResponse } from "next/server";

export async function GET() {
 return NextResponse.json({
    name: "John Doe",
    email: "johndoe@gmail.com",
    age: 30,
 })
}