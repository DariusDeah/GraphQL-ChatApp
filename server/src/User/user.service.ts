import { GraphQLError } from "graphql";
import { HydratedDocument } from "mongoose";
import { UserModel } from "./user.model";
import { IUser } from "./user.type";

export class UserService {
  async createUser(input: {
    name: string;
    email: string;
    password: string;
    googleId: string;
  }) {
    const createdUser = await UserModel.create(input);
    return createdUser;
  }

  async findByUID(uid: string): Promise<HydratedDocument<IUser>> {
    const user = await UserModel.find().findByUID(uid);
    if (!user) {
      throw new GraphQLError("user not found");
    }
    return user;
  }
}
