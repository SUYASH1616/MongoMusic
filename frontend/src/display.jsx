import React, { useState } from "react";

import axios from 'axios';
// let data=[];

const Display=()=>{
    const [data,setData]=useState([]);
    const handleGetAllData=async()=>{
        try
        {
            const result=await axios.get("http://localhost:5000/all");
            if(!result.data){
                console.log("error",result);
            }
            else{
                setData(result.data);
                // data=result.data;
                console.log(data);
            }
        }catch(error){
            console.log(error);
        }
    }


return <div>
    <button onClick={handleGetAllData}  style={{color:"red",}}>get data</button>
    <table>
        <thead>
            <tr >
                <th style={{padding:"10px"}}>Sr No</th>
                <th style={{padding:"10px"}}>Song Name</th>
                <th style={{padding:"10px"}}>Film Name</th>
                <th style={{padding:"10px"}}>Music director</th>
                <th style={{padding:"10px"}}>Singer</th>
                <th style={{padding:"10px"}}>Actor</th>
                <th style={{padding:"10px"}}>Actress</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((element,index)=>(
                    <tr key={index}>
                        <td style={{padding:"10px",color:"red"}}>{index+1}</td>
                        <td style={{padding:"10px"}}>{element.songName}</td>
                        <td style={{padding:"10px"}}>{element.filmName}</td>
                        <td style={{padding:"10px"}}>{element.musicDirector}</td>
                        <td style={{padding:"10px"}}>{element.singer}</td>
                        <td style={{padding:"10px"}}>{element.actor}</td>
                        <td style={{padding:"10px"}}>{element.actress}</td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
</div>
}
export default Display;