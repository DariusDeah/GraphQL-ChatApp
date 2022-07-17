import { HydratedDocument } from "mongoose";
import { User, UserModel } from "./user.model";
import { fieldsHider } from "../helpers/fieldsHider";
import bcrypt from "bcrypt";
import { BadRequestError, NotFoundError } from "../utils/Errors";

export class UserService {
  async createUser(input: {
    name: string;
    email: string;
    password: string;
    googleId: string;
  }): Promise<HydratedDocument<User>> {
    input.email = input.email.toLowerCase();
    const userData = { ...input };
    const createdUser = await UserModel.create(userData);

    return createdUser;
  }

  async findUsers(name: string, context: any) {
    const users = await UserModel.find({ name: name }).select("name email id");
    if (users.length === 0) {
      throw new NotFoundError(`User ${name} not found`);
    }
    return users;
  }

  async findByID(id: string): Promise<HydratedDocument<User>> {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new NotFoundError("user not found by that id");
    }
    return user;
  }

  async login(input: {
    email: string;
    password: string;
  }): Promise<HydratedDocument<User>> {
    const user = await UserModel.findOne({ email: input.email.toLowerCase() });
    if (!user) {
      throw new NotFoundError("user not found");
    }

    const isValidPassword = await bcrypt.compare(input.password, user.password);

    if (!isValidPassword) {
      throw new BadRequestError("invalid login");
    }

    //hide password before returning
    fieldsHider(user, ["password"]);
    return user;
  }
}
