import express,{ Request,Response } from 'express';
import { Utils } from './Utils';
import cors from 'cors'
import userRoutes from './UserRoutes'

const app = express()
const port:number = 3000

import fs from 'fs';
import path from 'path';
import mongoose from "mongoose";

const data:string = fs.readFileSync(path.join(__dirname,'config.json'),{encoding:'utf8',flag:'r'})
const config=JSON.parse(data);

const mongoUri = config.connection

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json())
app.use(cors());

app.use('/api', userRoutes)

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

mongoose.connect(mongoUri).then(()=>{
    console.log("Connection to Mongo Atlas")
    app.listen(3000,()=>{
        console.log("server strat at port 3000")
    })
}).catch(err=>{
    console.log("error connect to momgo atlas")
})

// app.listen(port, ()=>{
//     console.log('server is '+port);
// })

//web brow localhost:3000?userid=1 <---res          (ts)myserver (addUser) <--res-- (3 party) jsonplace... users