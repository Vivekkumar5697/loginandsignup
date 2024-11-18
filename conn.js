const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/VIVEK")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})
