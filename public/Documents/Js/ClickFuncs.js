import { StartFunc as ToLocalStorageStartFunc } from "./ToLocalStorage.js";
import { DocumentValidateFunc } from "./Validate.js";


let SaveClickFunc = async (event) => {

    let jVarLocalFromValidate = await DocumentValidateFunc();

    if (jVarLocalFromValidate.KTF) {


        console.log("jVarLocalFromValidate:", jVarLocalFromValidate);
        let jVarLocalTableBodyId = document.getElementById("TableBodyId");
        console.log("rows : ", jVarLocalTableBodyId.rows.length);

        let jVarLocalDocumentNo = document.getElementById("DocumentId").value;
        let jVarLocalDocumentDate = document.getElementById("DocumentDateId").value;
        let jVarLocalNatureDocument = document.getElementById("NatureDocumentId").value;
        let jVarLocalCopyXerox = document.getElementById("CopyXeroxId").value;
        let jVarLocalPageNo = document.getElementById("PageNoId").value;

        let saveData = {};
        saveData[jVarLocalTableBodyId.rows.length + 1] = {
            DocumentNo: jVarLocalDocumentNo,
            DocumentDate: jVarLocalDocumentDate,
            NatureDocument: jVarLocalNatureDocument,
            CopyXerox: jVarLocalCopyXerox,
            PageNo: jVarLocalPageNo
        };

        ToLocalStorageStartFunc({ inDataToSave: saveData });
        window.location.href = "";
    };

};

export { SaveClickFunc }