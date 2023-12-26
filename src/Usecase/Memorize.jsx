import React, { useCallback, useEffect, useMemo, useRef } from 'react'
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
        getPosts().then(res => { data.current = [...res]; filters(1) })
    }, [])

    // useEffect(() => {
    //     console.log(datas);
    // }, [datas])

    const [sum, setSum] = useState(100000)
    const summation = useMemo(() =>
        (sum) => {
            for (let i = 0; i < 1000000000; i++) {
                sum += 1;
            }
            return sum;
        }, [sum])
        
    console.log("Parent Rendered");
    return (
        <div>
            Memorize
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />

            <button onClick={() => filters(number)}>Callback</button>
            <br />
            {sum}
            <button onClick={() => setSum(summation(sum))}>Memo</button>
            <Displaydata datas={datas} />
        </div>
    )
}

export default Memorize
