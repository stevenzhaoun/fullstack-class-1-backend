import { Request, Response } from 'express'
import { prisma } from '../client'

export const getUsers = async (req: Request, res: Response) => {

    const users = await prisma.user.findMany()

    return res.json(users)
}

export const getUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    if(!user) {
        return res.status(404).send('not found')
    }
    return res.json(user)
}