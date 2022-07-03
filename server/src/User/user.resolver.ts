import { UserService } from "./user.service";
import { IUser } from "./user.type";

class UserResolver {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  async findByUID(uid: string): Promise<IUser> {
    return await this.userService.findByUID(uid);
  }
}
export const userResolver: UserResolver = new UserResolver();
