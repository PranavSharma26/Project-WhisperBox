import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}


const connection: ConnectionObject = {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already Connected")
        return
    }
    try{
        const db =  await mongoose.connect(process.env.NEXT_MONGODB_URI! || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("Database is Connected Successfully")
    }
    catch(error){
        console.log("Database connection failed: ",error);
        
    }
}

export default dbConnect;