import data  from '@/data.json';

import { NextResponse } from "next/server"


export async function GET(Request: Request,context: any) {
    const { params } = context;
    const user = data.filter((x) => x.id.toString() === params.userId); 
    if (!user) {
        return NextResponse.json({
            error: "User not found"
        }, { status: 404 });
    }

    return NextResponse.json({
        user: user
    });
}


