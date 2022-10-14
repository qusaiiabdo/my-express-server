//jshint esversion:6

const express=require("express");

const app=express();

app.get("/", function(req,res){
    res.send("<h1>hello world</h1>")
})

app.get("/contact",function(req,res){
res.send("contact me at:qusaiabdo@gmail.com")
})

app.get("/about",function(req,res){
    res.send("i'm qusai abdo studying computer engineering ")
    })

 app.get("/hobbies",function(req,res){
    res.send("<ul><li>football</li><li>coffe</li><li>gym</li></ul>")
        })

app.listen(3000, function(){
    console.log("server started on port 3000")
}); 