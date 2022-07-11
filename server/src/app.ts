import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { COOKIE_CONFIG } from "./config";
import cookieSession from "cookie-session";
import { Schema } from "./index";
export const app: express.Application = express();

app.use(cors());

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 1000,
    keys: [COOKIE_CONFIG.secret1, COOKIE_CONFIG.secret2],
  })
);

app.use("/graphql", (req, res, graphQLParams) => {
  graphqlHTTP({
    schema: Schema,
    // rootValue: await someFunctionToGetRootValue(request),
    context: {
      req,
      res,
      graphQLParams,
    },
    customFormatErrorFn: (err) => {
      return {
        message: err.message,
        // name: err.errName,
      };
    },
    graphiql: true,
  })(req, res);
});
