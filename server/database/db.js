const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Netflix_Clone",
    });
    
    console.log("MongoDB Connected !!👌");

  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB; // Assicurati che sia questa la linea di esportazione