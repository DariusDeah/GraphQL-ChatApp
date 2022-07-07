import mongoose from "mongoose";
import { app } from "./app";
import colors from "colors";
import { API_CONFIG, DB_CONFIG } from "./config";

mongoose
  .connect(DB_CONFIG.connection_string as string)
  .then(() => {
    console.log(colors.bold.blue("DB connection established"));
  })
  .catch((err) => {
    console.log(colors.red("DB connection failed:"), err);
  });

app.listen(API_CONFIG.PORT, () => {
  console.log(
    colors.bold.green(`server running at http://localhost:5000/graphql`)
  );
});
