import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({ 
        email, name, tel, cpf, role 
    }: CreateUserDTO): Promise<User> {
        // Verificar se o usuário já existe (pelo email)
        const userAlreadyExists = await prisma.user.findUnique({ 
            where: {
                email
            } 
        });

        if (userAlreadyExists) {
            // erro
        }
    
        // Criar o usuário
        const user = await prisma.user.create({
            data: { email, name, tel, cpf, role }
        });

        return user;
    }
}