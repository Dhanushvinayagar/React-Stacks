import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import { getPosts } from '../services/api.service'
import Displaydata from './Displaydata'

const Memorize = () => {
    const data = useRef([])
    const [datas, setData] = useState([])
    const [number, setNumber] = useState(1)

    const filters = useCallback((id) => {
        const filteredDatas = data.current.filter(data =>
            data.userId === id
        )
        setData(filteredDatas);
    }, [datas])

    useEffect(() => {
        getPosts().then(res =>{data.current=[...res]; filters(1)})
    }, [])

    // useEffect(() => {
    //     console.log(datas);
    // }, [datas])

    console.log("Parent Rendered");
    return (
        <div>
            Memorize
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            
            <button onClick={() => filters(number)}>Callback</button>

           <Displaydata datas ={datas} />
        </div>
    )
}

export default Memorize
