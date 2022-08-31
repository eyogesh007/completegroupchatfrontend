import {useState} from 'react';
import {useNavigate} from 'react-router';
import axios from 'axios';
import './login.css';



const Login = (parms)=>{
    
    let navigate=useNavigate();
    let token; 
    const[data,setData]=useState({
      username:"",
      password:""
    })

    
    const {username,password}=data;

    function loginfun(e){
      var name=e.target.name;
      var value=e.target.value;
      setData({...data,[name]:value});
    }

    function backtosignup(){
      localStorage.setItem("token",null);
      navigate('/');
    }


    async function submitform (e){
      e.preventDefault();
      console.log('fsFSFsfsf');
      await axios.post(`http://localhost:5000/login`,data).then(
        res => {
          console.log('ff');
         token=res.data;
        localStorage.setItem("token",res.data);}
    )
    if(token!=null){  
      navigate('/groupselect');
       }
       else
        navigate('/')
    }

    return(
      <div >
      <center >
        <form  className="loginform"onSubmit={submitform}>
        <label>Login</label>
          <br/><br/>
          <input className="logininput" onChange={loginfun} type="text" name="username" placeholder="username" value={username}/>
          <br/>
        <input className="logininput" onChange={loginfun} type="password" name="password" placeholder="password" value={password}/>
          <br/>
        <input className="logininput" type="submit" onClick={submitform}/>
        <br/>
        <button className="logininput" onClick={backtosignup}>don't have an account</button>
        </form>
        <br/>
          
        </center>
      </div>
    );

}

export default Login;
