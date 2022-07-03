import express from "express";
import { graphqlHTTP } from "express-graphql";
import { UserSchema } from "./User/user.index";
import cors from "cors";
export const app: express.Application = express();

app.use(cors());

//routes
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: UserSchema,
  })
);
