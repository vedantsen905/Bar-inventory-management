import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL

if(!MONGODB_URL){
    throw new Error("env variable not present")
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
      return cached.conn;
    }
  
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((mongoose) => {
        console.log('✅ MongoDB connected');
        return mongoose;
      }).catch((err) => {
        console.error(' MongoDB connection error:', err);
        throw err;
      });
    }
  
    cached.conn = await cached.promise;
    return cached.conn;
  }
  
export {connectDB}