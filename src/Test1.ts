import { Utils } from "./Utils";

if(Utils.add(1,2) === 3)
{
    console.log(0)
}else{
    console.log(1)
}

const data: any = {
    "name" : "dornor",
    "username" : "dornorja"
}

try {
    const response: any = Utils.addUser(data);
    const correct_result: any = {"name": "dornor","username":"dornorja"}

    const keys: string[] = Object.keys(correct_result);
    for (const k of keys){
        if (correct_result[k] !== response[k]){
            console.log("addUser" + k)
        }
    }
} catch (error) {
    console.log("addUser" + error)
}