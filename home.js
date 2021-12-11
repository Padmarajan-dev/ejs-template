const app = require('express');

const server = app();

const path = require("path");

server.get("/home",(req,res)=>{
   res.send("<h1>Home Page</h1>");
});

server.set("view engine","ejs");
server.set("views",__dirname+"/views");

server.get("/sample",(req,res)=>{
  const Movies =   [
   {name:"lord of rings",rating:"2.4"},
   {name:"Avatar",rating:"3.4"},
  ]
  res.render("sample",{movies:Movies});
});

server.listen("3000",()=>{
    console.log("server running successfully!");
})