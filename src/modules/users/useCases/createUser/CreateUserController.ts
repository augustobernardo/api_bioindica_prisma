import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CraeteUserController {
    async handle(req: Request, res: Response) {
        const { email, name, tel, cpf, role } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({ email, name, tel, cpf, role });

        return res.status(201).json({
            status: "success",
            message: "User created successfully",
        });
    }
}