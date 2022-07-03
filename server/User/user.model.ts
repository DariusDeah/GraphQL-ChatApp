import { prop, getModelForClass, pre, index } from "@typegoose/typegoose";
import bcrypt from "bcrypt";

@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(this.password, salt);

  this.password = hashedPassword;
})
@index({ email: 1 })
class User {
  @prop()
  uid: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true })
  email: string;

  @prop()
  googleId: string;

  @prop({ required: true })
  password: string;
}

export const UserModel = getModelForClass<typeof User>(User);
