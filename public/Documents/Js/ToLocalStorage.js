let StartFunc = ({ inDataToSave }) => {
    if ("Document" in localStorage) {
        let LocalOldData = localStorage.getItem("Document");
        let LocalNewData = { ...JSON.parse(LocalOldData), ...inDataToSave };
        localStorage.setItem("Document", JSON.stringify(LocalNewData));
    } else {
        localStorage.setItem("Document", JSON.stringify(inDataToSave));
    };
};

export { StartFunc }