import { connectDB } from "@/lib/db";
import contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

 const data = await contact.find();

    return NextResponse.json({
      success: true,
      data: data,
    });

  } catch (error) {
    console.log("Error Fetching Data");

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}



// POST Request Handler

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide all fields",
        },
        { status: 400 }
      );
    }

    const newContact = new contact({
      name,
      email,
      message,
    });

    await newContact.save(); // ✅ important

    return NextResponse.json(
      {
        success: true,
        data: newContact,
      },
      { status: 201 }
    );

  } catch (error) {
    console.log("Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}