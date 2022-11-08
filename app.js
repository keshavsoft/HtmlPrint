let express = require("express");
let app = express();
let port = 3000;
let path = require("path");

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(301).redirect("./Html/page1.html")
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
    console.log(` Click to open: http://localhost:${port}`);
});