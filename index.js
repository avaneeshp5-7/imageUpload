var exp=require("express");
var mul=require("multer")
var file=mul({
    dest:"imagefile" // directory name
})
var app=exp()
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});
app.post("/",file.single("my-image"),(req,res)=>{
    res.redirect("/")
})
app.listen(1212)
console.log("1212")