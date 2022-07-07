import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql/type";
import { UserType } from "../User/user.type";

interface IConversation {
  uid: string;
  participants: string[];
}

export const ConversationType = new GraphQLObjectType<IConversation>({
  name: "Conversation",
  fields: () => ({
    uid: { type: GraphQLID },
    participants: { type: GraphQLList(UserType)! },
  }),
});
