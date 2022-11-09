import { SaveClickFunc } from "./ClickFuncs.js";
import { FromHbs } from "./ShowTable.js";

let StartFunc = () => {
    let jVarLocalsaveClick = document.getElementById("save");

    jVarLocalsaveClick.addEventListener("click", SaveClickFunc);

    document.addEventListener("DOMContentLoaded", FromHbs);
};


export { StartFunc }
