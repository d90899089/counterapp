const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require("cors");

const app = express()
const port = 3001;
app.use(cors());

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage})

app.post("/upload", upload.single('file'),(req,res)=>{
    res.send("File Uploaded");
    console.log("File uploaded")
})

app.listen(port,()=>{
    console.log("server start at 3001")
})