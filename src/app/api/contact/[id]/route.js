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