const express = require("express");
const { v1: uuidv1 } = require('uuid');
const path = require("path");
const fs = require("fs");



const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// html routes
app.get ("/notes",(req,res)=>{
   res.sendFile(path.join(__dirname,"public/notes.html"));

});









app.post("/api/notes",(req,res)=>{
   const noteObj =req.body;
   noteObj.id = uuidv1(); 

   console.log(noteObj);



   
})




app.listen(PORT,() =>
{ console.log("App listner on port: "+ PORT );

})