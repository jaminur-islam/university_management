import express, { Application } from "express"
import cors from "cors"
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use("/api/v1/user", (req, res) => {
    res.send("ok")
})

export { app }