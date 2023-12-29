import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [sum, setSum] = useState(1)

    const summation = useMemo(() =>
        (sum) => {
            for (let i = 0; i < 1000000000; i++) {
               
            }
            console.log("sum");
            return sum+1;
        }, [sum])

    console.log("usememo rendered");

    return (
        <div>
            {sum}
            <button onClick={() => setSum(summation(sum))}>Memo</button>
        </div>
    )
}

export default Usememo
