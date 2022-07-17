import { GraphQLError } from "graphql/error/GraphQLError";
import { Context } from "../interfaces/Contex.interface";
import { User } from "./user.model";
import { UserService } from "./user.service";

class UserResolver {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async createUser(input: {
    name: string;
    email: string;
    password: string;
    googleId: string;
  }): Promise<User> {
    const createdUser = await this.userService.createUser(input);
    return createdUser;
  }

  async findByID(id: string, context: Context): Promise<User | GraphQLError> {
    const user = await this.userService.findByID(id);
    return user;
  }

  async login(input: { email: string; password: string }): Promise<User> {
    const user = await this.userService.login(input);
    return user;
  }
  async findUsers(name: string, context: any): Promise<User[]> {
    const users = await this.userService.findUsers(name, context);
    return users;
  }
}

export const userResolver: UserResolver = new UserResolver();
