import mongoose, { set, connect } from 'mongoose';

const connectToDB = async () => {
    // set("strictQuery", false);
    console.log("Pinku");
    
    try {
        const conn = await connect(process.env.MONGO_URI, {
            dbName: process.env.DB
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        
        process.exit(1);
    }
}

export default connectToDB;