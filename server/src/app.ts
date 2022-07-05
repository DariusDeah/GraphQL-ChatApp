import express from "express";
import { graphqlHTTP } from "express-graphql";
import { UserSchema } from "./User/user.index";
import cors from "cors";
import { COOKIE_CONFIG } from "./config";
import cookieSession from "cookie-session";
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
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 1000,
    keys: [COOKIE_CONFIG.secret1, COOKIE_CONFIG.secret2],
  })
);
