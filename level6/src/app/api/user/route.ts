import { NextResponse } from "next/server";


// Get Request Handler
export async function GET() {
 return NextResponse.json({
    name: "John Doe",
    email: "johndoe@gmail.com",
    age: 30,
 })
}

// Post Request Handler
export async function POST(request: Request) {
    let { name, email, age } = await request.json();

    return NextResponse.json({
        name,
        email,
        age,
    })
}