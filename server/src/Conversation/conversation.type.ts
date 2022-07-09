import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql/type";
import { UserType } from "../User/user.type";

export interface IConversation {
  uid: string;
  participants: string[];
}

export const ConversationType = new GraphQLObjectType<IConversation>({
  name: "Conversation",
  fields: () => ({
    id: { type: GraphQLID },
    participants: { type: GraphQLList(UserType)! },
  }),
});
