import mongoose from "mongoose";

export default function connectDB() {
  const databaseName =
    process.env.NODE_ENV === "test"
      ? process.env.MONGO_TEST_DATABASE
      : process.env.MONGO_DATABASE;
  const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@database:27017/${databaseName}?authSource=admin`;

  try {
    mongoose.connect(url);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once("open", () => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`Connection error: ${err}`);
  });
}
