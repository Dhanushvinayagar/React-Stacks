import React, { useEffect, useState } from 'react'

const Usestate = () => {
    const [input,setInput] = useState("")
    const oninputChange = (e) =>{
        setInput(e.target.value);
        console.log("name",input);
    }
    useEffect(() => {
        console.log("useeffect name",input);
    }, [input]);

    const [password,setPassword] = useState("")
    const onpasswordChange = (e) =>{
        setPassword(e.target.value);
        console.log("password",password);
    }
    useEffect(() => {
        console.log("useeffect password",password);
    }, [password]);

  return (
    <div style={{ border : "2px solid black" , padding : "50px" , display:"flex" , flexDirection : "column" , width : "250px" , marginTop : "50px" , marginLeft : "450px"}}>
        <label >Name</label>
        <input type='text' value={input} onChange={(e)=>oninputChange(e)}/>
        <p>{input}</p>
        <br />
        <label >Password</label>
        <input type='password' value={password} onChange={(e)=>onpasswordChange(e)}/>
        <p>{password}</p>
    </div>
  )
}

export default Usestate
