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
        const url="mongodb+srv://pranavsharma2610:1234567890@cluster0.xelhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        const db =  await mongoose.connect(url || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("Database is Connected Successfully")
    }
    catch(error){
        console.log("Database connection failed: ",error);
        
    }
}

export default dbConnect;