import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql/type";
import { UserType } from "../User/user.type";

export interface IMessage {
  id: string;
  conversationId: string;
  sender: string;
  content: string;
}

export const MessageType = new GraphQLObjectType<IMessage>({
  name: "Message",
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    sender: { type: UserType },
    conversationId: { type: GraphQLID },
  }),
});
