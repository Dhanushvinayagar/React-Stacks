import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './login.css'
import useStore from '../store/store';

const Login = () => {

    const {login , handleName , handlePassword} = useStore()

    const handleSubmit = () =>{
        console.log("submit",login);
    }
    return (
        <>
            <div className="login">
                <Input size="large" type="text" placeholder="  Username" prefix={<UserOutlined />} onChange={(e)=>handleName(e)} />
                <Input.Password type="password"
                    placeholder=" Password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined  />)} onChange={(e)=>handlePassword(e)}/>
                <div className="login-btn">
                    <Button type="primary" onClick={handleSubmit}>Submit</Button>
                </div>
                {login.userName}
                {login.password}
            </div>
        </>
    )
}

export default Login
