const express = require("express");
const axios = require("axios");
const ejs = require("ejs");
const path = require("path")
const api = require("./api/api");


const app = express();
app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


// app.get("/",(req,res)=>{
//     res.send(api.data);
// })

app.get("/states",(req,res)=>{
    axios.get("https://covidnigeria.herokuapp.com/api")
    .then(data => res.render("index",{state:data.data.states}))
       .catch(err => res.send(err));
})

// app.get("/states",(req,res)=>{
//     axios.get("https://covidnigeria.herokuapp.com/api")
//     .then(data => res.sendFile(path.join(__dirname,"state.html")))
//        .catch(err => res.send(err));
    
// })



const port = 8000 || process.env.port;
app.listen(port,()=>{
    console.log(`running on ${port}`)
})

