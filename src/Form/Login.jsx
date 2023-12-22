import React, { useEffect } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './login.css'
import useStore from '../store/store';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate() 

    const {login , handleName , handlePassword} = useStore()

    const handleSubmit = () =>{

        if(localStorage.getItem('username') === login.userName ){
            localStorage.setItem('auth',true) 
        } 
        else{
            localStorage.setItem('auth',false) ;
            navigate('/signup')
        } 
        const auth = localStorage.getItem('auth')
        if(auth === "true"){
            console.log("Authenticated",auth);
            navigate('/home')
        }
    }

    useEffect(()=>{
        const auth = localStorage.getItem('auth')
        if(auth === "true"){
            navigate('/home')
        }
    },[])
    return (
        <>
            <div className="container">
                <h1 style={{ marginRight : "45%" }}>Login</h1>
                <Input size="large" type="text" placeholder="  Username" prefix={<UserOutlined />} onChange={(e)=>handleName(e)} />
                <Input.Password type="password"
                    placeholder=" Password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined  />)} onChange={(e)=>handlePassword(e)}/>
                <div className="btn">
                    <Button type="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default Login
