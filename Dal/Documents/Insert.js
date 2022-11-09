var fs = require('fs');
let CommonDataPath = "Data/Documents";

let ToJson = ({ inJsonData }) => {
    //first lets check if the file exists in the same folder 
    if (fs.existsSync('mynewfile.txt')) { //to check the file in the other directories please change the path of the file from "mynewfile.txt" to the path of your file
        console.log('The file exists.'); //instead of consoling you can also remove or modify the file

    } else { //this will be exevuted if the files doesn't exist
        //this will create a file in the same directory
        fs.writeFileSync(`${CommonDataPath}/1.json`, JSON.stringify(inJsonData), function (err) { //to create the file in the other directories please change the path of the file from "mynewfile.txt" to the path of your file
            if (err) {
                throw err;  //if any error happens then this will through the detailed error
            } else {
                console.log('Saved!'); //if no error found then this code will be executed. instead of consoling you can do other stuff like calling any other function etc
            }
        });

    };
};

module.exports = ToJson;
