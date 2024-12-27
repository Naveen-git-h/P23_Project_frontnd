import React from 'react'
import {useNavigate} from "react-router-dom"
import { useRef } from 'react'; 
import axios from "axios"
const Login = () => {

    const navigate=useNavigate();
    const ref1=useRef(null)
    const ref2=useRef(null)

    const login=async()=>{
        try {
          const res = await axios.post("http://localhost:9090/login",{"username":ref1.current.value,"password":ref2.current.value})
          const{data}=res;
          const{login}=data;
          console.log(data)
          
            if(login=="success"){
                const  {role,token}=data;
                window.localStorage.setItem("token",token)
  
                role=="ROLE_USER"?navigate("/userdashboard"):navigate("/admindashboard")
            }else{
              
               navigate("/error")
            }
          } catch (error) {
            navigate("/error")
          }
    }

    return(
        <>
        <div className="body">
        <fieldset>
          <h4>LOGIN</h4>
            
            <div className="input-type"><i class="fa fa-user"></i><input type="text" ref={ref1} placeholder="Enter User Name" className="input"/></div>
            <br />
            <div className="input-type"><i class="fa fa-key"></i><input type="password" ref={ref2} placeholder="Enter User password" className="input"/></div>
            <br />
            <button onClick={login} className="button">LOGIN</button>
        </fieldset>
        </div>
        </>
    
  )
}

export default Login