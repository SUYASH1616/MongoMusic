const express=require("express");

const router=express.Router();

const {handleGetAllData, handlePostAllData, handleGetDirector,handleGetDirectorAndSinger, handleDelete, handleGetFilmAndSinger,handleUpdate}=require("../controllers/music");

router.get("/all",handleGetAllData);
router.post("/all",handlePostAllData);
router.get("/all/:director",handleGetDirector);
router.get("/all/:director/:singer",handleGetDirectorAndSinger);
router.delete("/all/:songName",handleDelete);
router.get("/alll/:film/:singer",handleGetFilmAndSinger);
router.put("/up/:songName",handleUpdate);

module.exports=router;