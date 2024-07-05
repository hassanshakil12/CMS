import mongoose from "mongoose";
import { MONGO_DB_URI } from "../config.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGO_DB_URI);
    console.log(
      `Database connected Successfully... HostName: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
