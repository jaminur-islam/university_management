import { NextFunction, Request, Response } from 'express'
import { usersServices } from './users.services'
const usersController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await usersServices.createUser(req.body)
      res.send({ status: true, data: user })
      next()
    } catch (err) {
      if (err instanceof Error) {
        res.send({ status: false, message: err.message || null })
      } else {
        res.send({ status: false, message: 'An unknown error occurred' })
      }
    }
  },
  getAllUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await usersServices.getAllUsers()
      res.send({ status: true, data: user })
      next()
    } catch (err) {
      if (err instanceof Error) {
        res.send({ status: false, message: err.message })
      } else {
        res.send({ status: false, message: 'An unknown error occurred' })
      }
    }
  },
}
export { usersController }
