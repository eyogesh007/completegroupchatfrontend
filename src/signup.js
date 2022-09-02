import react,{useState,useEffect} from 'react';
import {Navigate,useNavigate} from 'react-router';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './login.css';
const Signup = ()=>{

    let navigate=useNavigate();
    const[data,setData]=useState({
      username:"",
      email:"",
      password:"",
      confirmpassword:""
    })
    const {username,email,password,confirmpassword}=data;

    function loginfun(e){
      var name=e.target.name;
      var value=e.target.value;
      setData({...data,[name]:value});
    }

    function backtologin(){
      navigate('/login')
    }

    function submitform(e){
      e.preventDefault();
      console.log(data);
       axios.post(`https://groupchatting.zebsy.in/register`,data).then(
        res => {alert(res.data);
          setData({
            username:'',
            email:'',
            password:'',
            confirmpassword:''
        });}
       )
    }

    return(
      <div>
      <center>
        <form className="loginform" onSubmit={submitform}>
          <label>Sign Up</label>
          <br/><br/>
          <input className="logininput" onChange={loginfun} type="text" name="username" placeholder="username" value={username}/>
          <br/>
          <input className="logininput" onChange={loginfun} type="email" name="email" placeholder="email" value={email}/>
          <br />
        <input className="logininput" onChange={loginfun} type="password" name="password" placeholder="password" value={password}/>
          <br/>
          <input className="logininput" onChange={loginfun} type="password" name="confirmpassword" placeholder="confirm password" value={confirmpassword}/>
          <br/>
        <input className="logininput" type="submit" onClick={submitform}/>
        <br/>
        <button className="logininput" onClick={backtologin}>already have an account</button>
        </form>
        </center>
      </div>
    );

}

export default Signup;
