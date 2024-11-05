import mongoose from "mongoose";

export default async function connectDB() {
  const databaseName =
    process.env.NODE_ENV === "test"
      ? process.env.USER_SERVICE_MONGO_TEST_DATABASE
      : process.env.USER_SERVICE_MONGO_DATABASE;
  //const url = `mongodb://database:27017?authSource=admin`;
  const url = `mongodb://${process.env.USER_SERVICE_MONGO_USERNAME}:${process.env.USER_SERVICE_MONGO_PASSWORD}@mongo:27017/${databaseName}?authSource=admin`;
  console.log(
    "USER",
    process.env.USER_SERVICE_MONGO_DATABASE,
    process.env.USER_SERVICE_MONGO_USERNAME,
    process.env.USER_SERVICE_MONGO_PASSWORD
  );
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
