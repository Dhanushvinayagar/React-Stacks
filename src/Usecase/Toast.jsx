import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toast = () => {
    const [loader, setLoader] = useState(false);

  const toastTesting = async () => {
    try {
      // Display loader toast
      setLoader(true);
      toast.info('Simulating...', { autoClose: false });

      // Simulate a fetch operation (replace with your actual fetch logic)
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();

      // Do something with the data (update state, etc.)
      console.log(data);

      // Hide loader toast
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally{
      setLoader(false);
      setTimeout(()=>
        toast.dismiss() ,
        3000
      )
    }
  };

  useEffect(()=>{
      console.log("useeffect started");
      toastTesting()
      console.log("useeffect executed");
  },[])

  return (
    <div>

      <h1>Fetch Data Example</h1>
      <button onClick={toastTesting}>Fetch Data</button>

      <ToastContainer />
      {loader ? 'Loading' : 'Loaded in console'}
      
    </div>
  )
}

export default Toast
