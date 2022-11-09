import { StartFunc as ToLocalStorageStartFunc } from "./ToLocalStorage.js";
import { DocumentValidateFunc } from "./Validate.js";

let SaveClickFunc = async (event) => {
    let jVarLocalFromValidate = await DocumentValidateFunc();

    if (jVarLocalFromValidate.KTF) {
        let jVarLocalTableBodyId = document.getElementById("TableBodyId");

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
        // window.location.href = "";
        await LocalPostToServer();
        console.log("jVarLocalFromValidate:------");
    };
};

let LocalPostToServer = async () => {
    let jVarLocalFetchUrl = "/Documents/Save";
    let jVarLocalData = localStorage.getItem("Document");
    console.log("jVarLocalData : ", jVarLocalData);
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(JSON.parse(jVarLocalData))
    };

    let response = await fetch(jVarLocalFetchUrl, settings);
    let data = await response.text();
    console.log("ssssssssss : ", data);
    //return data;
};

export { SaveClickFunc }