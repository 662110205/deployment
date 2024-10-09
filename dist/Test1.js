"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
if (Utils_1.Utils.add(1, 2) === 3) {
    console.log(0);
}
else {
    console.log(1);
}
const data = {
    "name": "dornor",
    "username": "dornorja"
};
try {
    const response = Utils_1.Utils.addUser(data);
    const correct_result = { "name": "dornor", "username": "dornorja" };
    const keys = Object.keys(correct_result);
    for (const k of keys) {
        if (correct_result[k] !== response[k]) {
            console.log("addUser" + k);
        }
    }
}
catch (error) {
    console.log("addUser" + error);
}
