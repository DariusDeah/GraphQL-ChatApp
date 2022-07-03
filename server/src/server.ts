import mongoose from "mongoose";
import { app } from "./app";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config({ path: "../config.env", debug: true });

mongoose
  .connect(process.env.DB_CONNECTION as string)
  .then(() => {
    console.log("DB connection established".bgGreen);
  })
  .catch((err) => {
    console.log(colors.red("DB connection failed"));
  });

app.listen(5000, () => {
  console.log(
    colors.bold.green(`server running at http://localhost:5000/graphql`)
  );
});
