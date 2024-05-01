const mongoose=require("mongoose");

const song=new mongoose.Schema({
    songName:{
        type:String,
        required:true,
        unique:true,
    },

    filmName:{
        type:String,
    },

    musicDirector:{
        type:String,
        required:true,
    },

    singer:{
        type:String,
        required:true,
    },

    actor:{
        type:String,
        required:true,
    },
    actress:{
        type:String,
        required:true,
    }
});

const songDetailes=mongoose.model("songDetailes",song);

module.exports=songDetailes;