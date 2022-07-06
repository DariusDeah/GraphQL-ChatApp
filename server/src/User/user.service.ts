import { GraphQLError } from "graphql";
import { HydratedDocument } from "mongoose";
import { UserModel } from "./user.model";
import { IUser } from "./user.type";
import { fieldsHider } from "../helpers/fieldsHider";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
export class UserService {
  async createUser(input: {
    name: string;
    email: string;
    password: string;
    googleId: string;
  }): Promise<HydratedDocument<IUser>> {
    input.email = input.email.toLowerCase();
    const userData = { ...input, uid: uuid() };

    const createdUser = await UserModel.create(userData);
    return createdUser;
  }

  async findByUID(uid: string): Promise<HydratedDocument<IUser>> {
    const user = await UserModel.findOne({ uid });
    if (!user) {
      throw new GraphQLError("user not found");
    }
    return user;
  }

  async login(input: {
    email: string;
    password: string;
  }): Promise<HydratedDocument<IUser>> {
    const user = await UserModel.findOne({ email: input.email.toLowerCase() });
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
