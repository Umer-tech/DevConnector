const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://umer1999:safra1999@cluster0.jlhpdoj.mongodb.net/Dev-Connector?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("MongoDB Connected....");
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
