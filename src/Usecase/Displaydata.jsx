import React from 'react'

const Displaydata = ({ datas }) => {
    console.log(" child component rendered");
    return (
        <>
            <div>
                {datas.length ? datas.map((el, index) =>
                    <div key={index}>
                        <p>{el.title}</p>
                    </div>) : <p>No data</p>}
            </div>
        </>
    )
}

export default Displaydata
