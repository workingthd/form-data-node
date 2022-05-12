const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();

app.use(express.json())
const upload = multer({ dest: './uploads' })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send("hello Hamza");
});

app.post("/image", upload.single('file'), (req, res) => {
    console.log(req.file)
    console.log(req.body.name)
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});