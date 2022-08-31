import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import './login.css';

function Groupselect(){
const [name,setName]=useState('')
const [password,setPassword]=useState('')
const [oname,setOname]=useState('')
const [ipassword,setIpassword]=useState('')
let navigate=useNavigate();
const [a,setA]=useState(1);
const [b,setB]=useState(1);
let target=1;

    async function newg(e){
        e.preventDefault();

       await axios.get(`https://usernames-52b05-default-rtdb.firebaseio.com/username.json`)
    .then(
         res=>
        {
           for(let i in res.data)
            {
                if(name===res.data[i].name){
                       target=0;
                        break;
            }
            }})
        if(target===1){
            axios.post(`https://usernames-52b05-default-rtdb.firebaseio.com/username.json`,{'name':name,'password':password})
            navigate(`/chat/${name}`)
        }  
        else
            setA(0)
            console.log(a)
        
    }

    async function oldg(e){
        e.preventDefault();
        await axios.get(`https://usernames-52b05-default-rtdb.firebaseio.com/username.json`)
        .then(
             res=>
            {
               for(let i in res.data)
                {
                    if(oname===res.data[i].name){
                           if(res.data[i].password===ipassword)
                           navigate(`/chat/${oname}`);
                }
                }})
                setB(0);
        
    }
    return(

        <div >
            <center>
                
            <form className='loginform1'>
                <label style={{alignContent:'center'}}>Create new group</label>
                <br></br>
            <input className="logininput" type='text' value={name} placeholder="group name" onChange={(e)=>{setName(e.target.value)}}></input>
            <br></br>
            <input className="logininput" type="password" value={password} placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <br></br>
            <input className="logininput" type='submit' value="CREATE" onClick={newg}></input>
            <br></br>
            {a===1?<p></p>:<p style={{color:"red" ,height:'1px'}}>link not available</p>}
      </form>
      <form className='loginform1'>
      <label style={{textAlign:'center'}}>Enter existing group</label>
                <br></br>
            <input className="logininput" type='text' value={oname} placeholder="group name" onChange={(e)=>{setOname(e.target.value)}}></input>
            <br></br>
            <input className="logininput" type="password" value={ipassword} placeholder="password" onChange={(e)=>{setIpassword(e.target.value)}}></input>  
            <br></br>
            <input className="logininput" type='submit' value="ENTER" onClick={oldg}></input>
            <br></br>
            <input className="logininput" type='button'  value="logout" onClick={()=>{localStorage.setItem("token",null);
            navigate('/');}}></input>
                        {b===1?<p></p>:<p style={{color:"red" ,height:'1px'}}>username or password not matching</p>}

            </form>
            </center>
        </div>
    )
}

export default Groupselect;