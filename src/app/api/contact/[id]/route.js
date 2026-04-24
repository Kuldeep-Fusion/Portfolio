import { connectDB } from "@/lib/db";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    await connectDB();

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact Deleted",
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error: Contact not deleted",
      },
      { status: 500 }
    );
  }
}


// update contact
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const { name, email, message } = await req.json();

    const data = await Contact.findByIdAndUpdate(id);

    if (!data) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }

    data.name = name;
    data.email = email;
    data.message = message;

    const upContact = await data.save();

    return NextResponse.json(
      {
        success: true,
        data: upContact,
      },
      { status: 200 }
    );

  } catch (error) {
    console.log("Failed to update contact", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update",
      },
      { status: 500 }
    );
  }
}