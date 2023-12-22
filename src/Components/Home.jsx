import React, { useRef, useState } from 'react'
import Dropdown from './Home/Dropdown';
import {Button} from 'antd'
import './Home.css'


const Home = () => {
    const [totalData, setTotaldata] = useState([
        [
            {
                value: 'India',
                label: 'India',
            },
            {
                value: 'USA',
                label: 'USA',
            }
        ], [
            {
                value: 'TamilNadu',
                label: 'TamilNadu',
            },
            {
                value: 'Kerala',
                label: 'Kerala',
            },
            {
                value: 'NewYork',
                label: 'NewYork',
            },
            {
                value: 'Brooklin',
                label: 'Brooklin',
            }
        ]
    ])
    const fetchArr = useRef(["",""])
    const handleSubmit = () =>{
        console.log("submit");
    }
    
    const handleClick = (val,i)=>{
        let arr = [...fetchArr.current]
        arr[i]=val
        fetchArr.current = ([...arr])
        console.log(arr);
        // some fetch / any operations you need
    }

    return (
        <>
            <div className='dropdown'>
                {
                    totalData.map((dataArray, index) =>
                    (
                        <div key={index}>
                            <Dropdown data={dataArray} handleClick={handleClick} index={index} />
                        </div>
                    )
                    )
                }
                    <Button type="primary" onClick={handleSubmit}>Submit</Button>
            </div>
        </>

    )
}

export default Home

