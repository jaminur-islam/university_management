import express, { Application } from 'express'
import cors from 'cors'
import userRouter from '../src/app/modules/users/users.router'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', userRouter)

export { app }
