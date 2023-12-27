import React from 'react'
import { Card } from 'antd';
import './tanstack.css'
import { PostQuery } from './tanstack-query/postsQuery';
import { useNavigate } from "react-router-dom";

const UseQueryRefactor = () => {
    const navigate = useNavigate();

    const { isPending, error, data } = PostQuery()

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h2>Posts data :</h2>
            <>
                {data.map((el, index) =>
                    <div key={index} className='card'>
                        <Card  bordered={false} style={{ width: 300 }} onClick={()=>navigate(`/tanstack/${el.id}`)}>
                            <p><b>{index+1}</b>.{el.title}</p>
                        </Card>
                    </div>
                )}
            </>

        </div>
    )
}

export default UseQueryRefactor
