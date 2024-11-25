import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Netflix_Clone",
    });
    
    console.log("MongoDB Connected !!👌");

  } catch (error) {
    console.log(error);
  }
};
