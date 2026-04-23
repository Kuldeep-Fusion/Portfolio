import { connectDB } from "@/lib/db";
import project from "@/models/project";
import { NextResponse } from "next/server";


export async function GET(res, req) {
  try {
    await connectDB();

 const data = await project.find();

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


export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const {title, description, image, link} = body;

        if(!title || !description || !image || !link) {
            return NextResponse.json({
                success: false,
                message: "please provide all fields",
            }
            , {status: 400})
        }

        const newProject = new project({
            id: Date.now(),
            title,
            description,
            image,
            link,
        })

        await newProject.save();

        return NextResponse.json({
            success: true,
            data: newProject,
        }, {status: 201})
        
    } catch (error) {
        console.log("Error creating projects", error);
        return NextResponse.json({
            success: false,
            message: "Server Error",
        })
        
    }
}



