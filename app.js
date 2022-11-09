let express = require("express");
let app = express();
let port = 3000;
let path = require("path");
let CommonInsert = require("./Dal/Documents/Insert");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(301).redirect("./Documents/Document8.html")
});

app.post('/Documents/Save', (req, res) => {
    console.log("server : ", req.body);
    CommonInsert({ inJsonData: req.body });
    res.end("hhhhhhhh");
});


app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
    console.log(` Click to open: http://localhost:${port}`);
});