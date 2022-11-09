let DocumentValidateFunc = async () => {
    let jVarLocalReturnObject = { KTF: false, KResult: {} };

    let jVarLocalFormForGarments = document.getElementById("DocumentId");

    jVarLocalFormForGarments.classList.add('was-validated');

    if (jVarLocalFormForGarments.checkValidity() === false) {
        LocalSetFocus({ inHtmControlToSearch: jVarLocalFormForGarments });

        jVarLocalReturnObject.KReason = "Form not validated!";
        return await jVarLocalReturnObject;
    };

    jVarLocalReturnObject.KTF = true;
    return await jVarLocalReturnObject;

};

let LocalSetFocus = ({ inHtmControlToSearch }) => {
    let jVarLocalRequired = inHtmControlToSearch.querySelectorAll("input");

    for (let i = 0; i < jVarLocalRequired.length; i++) {
        if (jVarLocalRequired[i].validity.valid === false) {
            jVarLocalRequired[i].focus();
            i = jVarLocalRequired.length + 1;
        };
    };
};




export { DocumentValidateFunc }