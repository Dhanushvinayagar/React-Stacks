import React, { useRef } from 'react'

const Useref = () => {

  const name = useRef("$")
  const number = useRef(0)
  const password = useRef("#")

  const handleChange1 = (e) => {
    name.current = e.target.value
    console.log(name, name.current);
  }
  const handleChange2 = (e) => {
    number.current = e.target.value
    console.log(number, number.current);
  }
  const handleChange3 = (e) => {
    password.current = e.target.value
    console.log(password, password.current);
  }

  const handleSubmit = () =>{
    console.log(name.current , number.current , password.current);
  }

  return (
    <div style={{ padding: "20%" }}>
      <label>Name</label>
      <input type='text' onChange={e => handleChange1(e)} />
      <p>{name.current}</p>
      <label>Number</label>
      <input type='number' onChange={e => handleChange2(e)} />
      <label>Password</label>
      <p>{number.current}</p>
      <input type='password' onChange={e => handleChange3(e)} />
      <p>{password.current}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Useref


// Useref input clear
// import { useRef } from "react";

// export default function App() {
//   const nameInput = useRef(null);
//   const clear = () => {
//     nameInput.current.value = "";
//   };
//   return (
//     <div className="App">
//       <input ref={nameInput} />    // this will store the current value as the reference to the useref without passing onchange
//       <button onClick={clear}> wyczyść </button>
//     </div>
//   );
// }
