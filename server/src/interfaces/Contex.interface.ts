import { Request, Response } from "express";
import { IUser } from "../User/user.type";
export interface Context {
  req: Request;
  res: Response;
  user: IUser | null;
}
