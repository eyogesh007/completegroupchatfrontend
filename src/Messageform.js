import react, { useEffect } from 'react'
import axios from 'axios';
import {useState} from 'react';

function Messageform(params){
    let [res,setRes]=useState("");
   
   
    return(
        <div >
            <p style={{paddingLeft:'20px'}}><span style={{fontWeight: 'bold'}}>{params.username}</span>:{params.msgs}</p>
        </div>
    )
}

export default Messageform;