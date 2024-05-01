const mongoose=require("mongoose");

const connectMongo=async(url)=>{
    await mongoose.connect(url)
    .then(()=>{
        console.log("Connected with MongoDB");
    })

}

module.exports={connectMongo};