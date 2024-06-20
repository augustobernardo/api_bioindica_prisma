import { CraeteUserController } from './../modules/users/useCases/createUser/CreateUserController';
import { Router } from "express";

const craeteUserController = new CraeteUserController();

const userRoutes = Router();

userRoutes.post("/", craeteUserController.handle);

export { userRoutes };