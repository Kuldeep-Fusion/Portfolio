import { connectDB } from "@/lib/db";
import project from "@/models/project";
import { NextResponse } from "next/server";

export async function DELETE(req, {params}) {
    try {
        const {id} = await params;
        await connectDB();

        const deleteProjects = await project.findByIdAndDelete(id);
        
        if(!deleteProjects){
            return NextResponse.json({
                success: false,
                message: "project not found"
            }, {status: 404});
        }

        return NextResponse.json({
            success: true,
            message: "project deleted"
        },{status: 200})


    } catch (error) {
        console.log("Error to deleting project");
        return NextResponse.json({
            success: false,
            message: "failed to delete project"
        },{
            status: 500
        })    
    }
}

//update project 
export async function PUT(req, {params}) {
    try {
        const [id] = await params
        await connectDB();
        const {title, description, image, link, } = await req.json()

         const data = await project.findByIdAndUpdate(id);

         title.title = title;
         description.description = description;
         image.image = image;
         link.link = link;
        
if(!data){
    return NextResponse.json({
        message: "failed to update project data",
        success: false
    }, {status: 404})
}
         return NextResponse.json({
            success: true,
            message: "updated projects",
            data: data
         }, {status: 200})
    } catch (error) {
         NextResponse.json({
            success: false,
            message: "failed to update projects"
         },{status: 500})
    }
}