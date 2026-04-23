import mongoose from "mongoose";

export const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGO_URI);

    const connection = mongoose.connection;
    
    connection.on("connected",() => {
        console.log("connected to DB");
        
    })
} catch (error) {
    console.log("Error connection to DB");
    console.log(error);
}
}