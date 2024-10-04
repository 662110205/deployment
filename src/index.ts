import express, { Request, Response } from "express";
import { Utils } from "./Utils";

const app = express()
const port: number = 3000

app.get('/', (req: Request, res: Response) => {
    res.send("hello dornor")
})

app.get('/addUser', async (req: Request, res: Response) => {
    const data: any = {
        "name": "dornor",
        "username": "misjaeduean"
    }

    const result = await Utils.addUser(data)
    res.send(result)
})

app.listen(port, () => {
    console.log('server is ' + port);
})