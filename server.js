const express = require("express");
const path  = require("path");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./shop/admin");
const shopRoutes = require("./shop/shop");


app.use(express.static(path.join(__dirname, "public")));
app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","error.html"));
})
app.listen(8080)
