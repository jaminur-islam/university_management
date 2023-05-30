import express, { Application, Request, Response } from 'express'
import cors from 'cors';
const app: Application = express();

const port = 5000

app.use(cors())
app.use(express.json())

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/api/v1/user', 



(req:Request, res:any) => {
  res.send('ok')
})

export { app }
