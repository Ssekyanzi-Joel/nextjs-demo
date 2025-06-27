import { NextResponse } from "next/server"
export async function GET() {
    return NextResponse.json({
        message: "Hello, World!",
        timestamp: new Date().toISOString()
    });
}


export async function POST(Request: Request) {
    const data = await Request.json();
    return NextResponse.json({
        data: data,
        message: "Data received successfully",
        timestamp: new Date().toISOString()

    });
}


