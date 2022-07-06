import express from "express";
import { graphqlHTTP } from "express-graphql";
import { UserSchema } from "./User/user.index";
import cors from "cors";
import { COOKIE_CONFIG } from "./config";
import cookieSession from "cookie-session";
import { Context } from "./interfaces/Contex.interface";
export const app: express.Application = express();

app.use(cors());

//routes
// app.use(
//   cookieSession({
//     name: "session",
//     maxAge: 24 * 60 * 1000,
//     keys: [COOKIE_CONFIG.secret1, COOKIE_CONFIG.secret2],
//   })
// );

app.use(
  "/graphql",
  // graphqlHTTP({
  //   graphiql: true,
  //   schema: UserSchema,
  //   pretty: true,
  //   context: (ctx: Context) => {
  //     console.log("context hit");
  //     return console.log(ctx.req);
  //   },
  // })
  graphqlHTTP(async (req, res, graphQLParams) => ({
    schema: UserSchema,
    // rootValue: await someFunctionToGetRootValue(request),
    context: {
      req,
      res,
      graphQLParams,
    },
    graphiql: true,
  }))
);
