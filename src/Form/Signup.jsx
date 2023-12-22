import React, { useRef } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './login.css'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const userName = useRef("")
    const password = useRef("")

    const navigate = useNavigate()

    const handleName = (e)=>{
        userName.current = e.target.value
    }

    const handlePassword = (e) =>{
        password.current = e.target.value
    }
    const handleSubmit = () =>{
        console.log(userName.current , password.current);
        localStorage.setItem(
            'username',userName.current,
        )
        navigate('/')
    }
  return (
    <>
        <div className="container">
                <h1 style={{ marginRight : "45%" }}>Signup</h1>
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

export default Signup
