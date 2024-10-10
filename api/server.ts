import app from "./app";

const port = process.env.PORT || 4000;

try {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
} catch (err) {
  console.error(err);
}
