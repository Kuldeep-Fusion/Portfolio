import { connectDB } from "@/lib/db";
import project from "@/models/project";
import { connect } from "mongoose";
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