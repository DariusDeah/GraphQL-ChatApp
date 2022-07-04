import { UserService } from "./user.service";
import { IUser } from "./user.type";

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
  }): Promise<IUser> {
    const createdUser = await this.userService.createUser(input);
    return createdUser;
  }

  async findByUID(uid: string): Promise<IUser> {
    const user = await this.userService.findByUID(uid);
    return user;
  }

  async login(input: { email: string; password: string }): Promise<IUser> {
    const user = await this.userService.login(input);
    return user;
  }
}
export const userResolver: UserResolver = new UserResolver();
