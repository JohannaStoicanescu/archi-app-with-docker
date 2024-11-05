import mongoose from "mongoose";

export default async function connectDB() {
  const databaseName =
    process.env.NODE_ENV === "test"
      ? process.env.TIMER_SERVICE_MONGO_TEST_DATABASE
      : process.env.TIMER_SERVICE_MONGO_DATABASE;
  const url = `mongodb://${process.env.TIMER_SERVICE_MONGO_USERNAME}:${process.env.TIMER_SERVICE_MONGO_PASSWORD}@database:27017/${databaseName}`;

  try {
    await mongoose.connect(url);
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
