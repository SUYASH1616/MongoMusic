const songDetailes = require("../models/song_detailes")


const handleGetAllData= async(req,res)=>{
    try{
        const result=await songDetailes.find({});
        res.send(result);
    }catch(error){
        console.log("Error in internal Server");
        res.sendd({error:"Internal Server Error"});
    }
}

const handlePostAllData= async(req,res)=>{
    try{
        const data=req.body;
        if(!data){
            console.log("Data is not present");
            res.status(400).send({error:"Enter field"})
        }
        const result=await songDetailes.create({
            songName:data.songName,
            filmName:data.filmName,
            musicDirector:data.musicDirector,
            singer:data.singer,
            actor:data.actor,
            actress:data.actress,
        });
        res.send({success:"data inserted succcessfully"});
    }catch(error){
        console.log("Error in internal Server");
        res.send({error:"Internal Server Error"});
    }
}

const handleGetDirector= async(req,res)=>{
    try{
        const {director}=req.params;
        // console.log(director);
        const result=await songDetailes.find({musicDirector:director});
        // console.log(result);
        res.send(result);
    }catch(error){
        console.log("Error in internal Server",error);
        res.send({error:"Internal Server Error"});
    }
}

const handleGetDirectorAndSinger= async(req,res)=>{
    try{
        const {director,singer}=req.params;
        // console.log(director);
        // console.log(singer);
        // console.log(req.params)
        const result=await songDetailes.find({
            $and: [
              {musicDirector: director },
              { singer: singer }
            ]
          });
        // console.log(result);
        res.send(result);
    }catch(error){
        console.log("Error in internal Server",error);
        res.send({error:"Internal Server Error"});
    }
}

const handleGetFilmAndSinger= async(req,res)=>{
    try{
        const {film,singer}=req.params;
        // console.log(film);
        // console.log(singer);
        const result=await songDetailes.find({
           
              filmName: film,
               singer: singer 
          
          });
        // console.log(result);
        res.send(result);
    }catch(error){
        console.log("Error in internal Server",error);
        res.send({error:"Internal Server Error"});
    }
}

const handleDelete= async(req,res)=>{
    try{
        const {songName}=req.params;
        // console.log(director);
        const result=await songDetailes.findOneAndDelete({songName:songName});
        // console.log(result);
        res.send(result);   
    }catch(error){
        console.log("Error in internal Server",error);
        res.send({error:"Internal Server Error"});
    }
}

const handleUpdate= async(req,res)=>{
    try{
        const {songName}=req.params;
        const{actor,actress}=req.body;
        // console.log(director);
        const result=await songDetailes.findOneAndUpdate({songName:songName},{$set:{actor:actor,actress:actress}});
        // console.log(result);
        res.send(result);   
    }catch(error){
        console.log("Error in internal Server",error);
        res.send({error:"Internal Server Error"});
    }
}
module.exports={handleGetAllData,handlePostAllData,handleGetDirector,handleGetDirectorAndSinger,handleDelete,handleGetFilmAndSinger,handleUpdate}