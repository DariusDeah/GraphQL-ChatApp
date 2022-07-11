import { Request, Response } from "express";
import { User } from "../User/user.model";
export interface Context {
  req: Request;
  res: Response;
  user: User | null;
}
