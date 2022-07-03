class UserResolver {
  async findByUID(uid: string): Promise<IUser> {}
}
export const userResolver: UserResolver = new UserResolver();
