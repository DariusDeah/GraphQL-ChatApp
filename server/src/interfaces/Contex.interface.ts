import { Request, Response } from "express";
import { User } from "../User/user.model";
import { IUser } from "../User/user.type";
export interface Context {
  req: Request;
  res: Response;
  user: User | null;
}
