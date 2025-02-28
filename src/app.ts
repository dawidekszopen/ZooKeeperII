import express, {Application, Request, Response}  from 'express'
import animalRouter from "./routes/animal.routes";

const app: Application = express()

app.use(express.json())

app.use("/api/animals", animalRouter)

app.get('/', (req: Request, res: Response)=>{
    res.send("Witaj w zoo")
});


export default app