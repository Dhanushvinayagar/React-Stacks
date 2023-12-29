import React, { useCallback, useEffect,  useRef, useState } from 'react'
import Displaydata from './Displaydata'
import { getPosts } from '../services/api.service'

const Usecallback = () => {
    const [number, setNumber] = useState(1)
    const data = useRef([])
    const [datas, setData] = useState([])

    const filters = useCallback((id) => {
        const filteredDatas = data.current.filter(data =>
            data.userId === id
        )
        setData(filteredDatas);
    }, [data])


    useEffect(() => {
        getPosts().then(res => { data.current = [...res]; filters(1) })
    }, [])

    console.log("usecallback rerendered");
    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            <button onClick={()=>filters(number)}>Callback</button>
            <Displaydata datas={datas} />
        </div>
    )
}

export default Usecallback
