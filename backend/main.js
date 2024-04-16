const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6699194",
  password: "7CJZeCtkFa",
  database: "sql6699194",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to mysql");
});

app.post("/contactformdata", function (req, res) {
  const formdata = req.body;
  const sqlquery = `INSERT INTO Customers (name,address) VALUES (?,?)`;
  const values = [formdata.name, formdata.address];

  connection.query(sqlquery, values, (err, result) => {
    if (err) {
      console.error("error while submitting to database" + err.stack);
      res.status(500).send("Error While Submitting");
      return;
    }
    console.log("Data submitted successfullyl");
    res.status(200).send("Submitted Successfully");
  });
});

app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
