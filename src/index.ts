import express,{ Request,Response } from "express";
import { Utils } from "./Utils";

const app = express()
const port:number = 3000

app.get('/',(req:Request, res:Response)=>{
    res.send("hello dornor")
})


app.get('/addUser',async (req:Request, res:Response)=>{
    
    const data:any = {
        "name": "dornor",
        "username": "dornorja"
    }

    const result = await Utils.addUser(data) //3 party jsonplaceholder
    console.log(result)
    res.send(result)
})

app.listen(port, ()=>{
    console.log('server is '+port);
})

//web brow localhost:3000?userid=1 <---res          (ts)myserver (addUser) <--res-- (3 party) jsonplace... users