import { GraphQLError } from "graphql";
import { HydratedDocument } from "mongoose";
import { UserModel } from "./user.model";
import { IUser } from "./user.type";
import { fieldsHider } from "../helpers/fieldsHider";
import bcrypt from "bcrypt";
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

  async login(input: {
    email: string;
    password: string;
  }): Promise<HydratedDocument<IUser>> {
    const user = await UserModel.findOne({ email: input.email });

    if (!user) {
      throw new GraphQLError("user not found");
    }

    const isValidPassword = await bcrypt.compare(input.password, user.password);

    if (!isValidPassword) {
      throw new GraphQLError("invalid login");
    }

    //hide password before returning
    fieldsHider(user, ["password"]);
    return user;
  }
}
