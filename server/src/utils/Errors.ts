import { GraphQLError } from "graphql/error/GraphQLError";

export class NotFoundError extends GraphQLError {
  message: string;
  statusCode: number;
  constructor(errMessage?: string) {
    //if a message is not provided then the default message will be used
    super(errMessage ?? "Resource Not Found!");
    Object.defineProperty(this, "name", { value: "NotFoundError" });
  }
}
