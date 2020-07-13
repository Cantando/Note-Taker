const express = require("express");


const app = express();

const PORT = process.env.PORT ||3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.get










app.listen(PORT,() =>
{ console.log('App listner on port: ${PORT}');

})