import { SaveClickFunc } from "./ClickFuncs.js";
import { FromHbs } from "./ShowTable.js";
import { DocumentValidateFunc } from "./validate.js";


let StartFunc = () => {
    let jVarLocalsaveClick = document.getElementById("save");

    jVarLocalsaveClick.addEventListener("click", SaveClickFunc);

    document.addEventListener("DOMContentLoaded", FromHbs);

    DocumentValidateFunc()
};

export { StartFunc }
