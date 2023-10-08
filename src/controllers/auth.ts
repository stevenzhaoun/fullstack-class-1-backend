import { Request, Response } from "express";
import { prisma } from "../client";
import { compareSync } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface LoginBody {
    email: string;
    password: string;
}

export async function login(req: Request<any, any, LoginBody>, res: Response) {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
        where: {
            email: email
        },
        include: {
            role: true,
            Password: true
        }
    })

    if (!user || !user.Password) {
        return res.status(404).send('No user found')
    }

    if (!compareSync(password, user.Password.hash)) {
        return res.status(400).send('Wrong password')
    }

    const userData = {
        id: user.id,
        name: user.name,
        roleId: user.roleId,
        email: user.email
    }

    const token = sign(userData, 'private_secret', {
        expiresIn: '30d'
    })

    const userResponse = {
        ...userData,
        token
    }

    // const userResponse = {
    //     id: user.id,
    //     name: user.name,
    //     roleId: user.roleId,
    //     token: token
    // }

    return res.json(userResponse)


}