const express = require("express");
const axios = require("axios");
const path = require("path")
const {PORT, DEFAULT_PORT, COVID_URL } = require('./constants');

const port = PORT || DEFAULT_PORT;

const app = express();
app.use(express.static("public", ));

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "pug");


app.get("/", async (req,res)=>{
    try {
        const response = await axios.get(COVID_URL)
        res.render("index",{summary:response.data});
    }catch(e) {
        res.send("ups, and error"); // TODO: CREATE A NOT FOUND PAGE
    }
})



app.listen(port,()=>{
    console.log(`service running on http://localhost:${port}/`);
})

