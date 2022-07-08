import {
  prop,
  getModelForClass,
  pre,
  index,
  types,
} from "@typegoose/typegoose";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import * as MUUID from "uuid-mongodb";

interface QueryHelpers {
  findByUID: types.AsQueryMethod<typeof findByUID>;
}

function findByUID(
  this: types.QueryHelperThis<typeof User, QueryHelpers>,
  uid: string
) {
  return this.find({ uid });
}

@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(this.password, salt);

  this.password = hashedPassword;
})
@index({ email: 1 })
@index({ uid: 1 })
export class User {
  @prop({ default: () => MUUID.v1() })
  uid: mongoose.Types.Buffer;

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
