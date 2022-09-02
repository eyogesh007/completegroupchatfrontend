import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';
import Messageform from './Messageform.js';
import './chat.css'
import { useParams } from 'react-router-dom'
const Chat=()=>{

    const [msg,setMsg]=useState("");
    const [res,setRes]=useState({});
    let navigate=useNavigate();
    const params = useParams();
    



    useEffect(()=>{
        axios.get(`https://groupchatting.zebsy.in/chat/${params.name}`,{headers:{'usertoken':localStorage.getItem('token')}}).then(res=>setRes(res.data))},[]);

    function setmessage(e){
        const m=e.target.value;
        setMsg(m);
    }
 

    function backtologin(){
            localStorage.setItem("token",null);
            navigate('/');
    }

    async function putmessage(e){
        e.preventDefault();
       await axios.post(`https://groupchatting.zebsy.in/chat/${params.name}`,{message:msg},{headers:{'usertoken':localStorage.getItem('token')}}).then((ress)=>{setRes(ress.data);});
       setMsg('');

    }
    return(

    <div>
        <center>
        <h3 >Welcome to {params.name}</h3>
        <a style={{textDecoration:'none'}} href='../groupselect'>Enter another group</a>
        </center>
    {Object.keys(res).map((value,index)=>{return (<Messageform key={index} username={res[value].username} msgs={res[value].message}></Messageform>)})}
        <br/>
       
        <footer  style={{bottom:"10px", left: "0",position:"sticky"}}>
    <form className="messageform" onSubmit={putmessage}>
        <label className="label">
        <input className="messageinput" type="text" name="msg" placeholder="enter message" value={msg} onChange={setmessage}/>
        <input className="messageinput"style={{marginLeft:'5px'}} type="submit" />
        <button className="messageinput" style={{marginLeft:'5px'}} onClick={backtologin}>logout</button>

        </label>
        
    </form>
   </footer>
        </div>
    )
}

export default Chat;