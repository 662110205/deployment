import axios from "axios";


function add(a:number,b:number)
{
    return a + b;
}

async function addUser(data:any){
    const response:any = await axios.post('https://jsonplaceholder.typicode.com/users',data);
    return response.data
}

export const Utils = { addUser, add }


//web browser (google.com) ---> (request) ---> google company server

//                 <html>... (html)  <-- (respon) -----google company server

