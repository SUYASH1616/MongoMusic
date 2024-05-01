const express=require("express");
const cors=require('cors');
const app=express();
const {connectMongo}=require('./models/config');
const musicRouter=require("./Routes/music");

const PORT=5000;
connectMongo("mongodb://127.0.0.1:27017/music");
app.use(cors());
app.use(express.json());   
app.use(express.urlencoded({extended:true}))
app.use("/",musicRouter);
app.listen(PORT,()=>{
    console.log(`Listing from port ${PORT}`);
});

// "songName":"Tu hi re",
//   "filmName":"Tu hi re",
//   "singer":"A.R.Rehaman",
//   "actor":"SRK",
//   "actress":"Shreyas"


// { name: { $in: ["John", "Jane"] } }, // Query condition to specify which students to update
//   {
//     $inc: { DSBDASubject: 10 } // Increment "DSBDASubject" marks by 10
// }

// const students = await Student.find(
//     { DSBDASubject: { $gt: 20 } }, // Query condition
//     { name: 1, _id: 0 } // Projection to include only the "name" field in the result
//   );

// db.students.updateMany(
//     {}, // Update all documents
//     {
//       $inc: {
//         cc: 10,  // Increment "cc" by 10
//         Al: 10,  // Increment "Al" by 10
//         dsbda: 10, // Increment "dsbda" by 10
//         cn: 10  // Increment "cn" by 10
//       }
//     }


// const students = db.students.find(
//     {
//       cc: { $gt: 25 }, // "cc" subject
//       Al: { $gt: 25 }, // "Al" subject
//       dsbda: { $gt: 25 }, // "dsbda" subject
//       cn: { $gt: 25 } // "cn" subject
//     },
//     { name: 1, _id: 0 } // Only return the "name" field in the results
//   );
  

