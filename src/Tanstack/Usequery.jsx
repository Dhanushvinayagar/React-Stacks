import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Card } from 'antd';
import './tanstack.css'
const Usequery = () => {

    const postsData = () => axios.get('http://localhost:5080/posts').then(res => res.data)

    const { isPending, error, data } = useQuery({
        queryKey: ['postData'],
        queryFn: postsData
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h2>Posts data :</h2>
            <>
                {data.map((el, index) =>
                    <div key={index} className='card'>
                        <Card title={el.title.slice(0, 10)} bordered={false} style={{ width: 300 }}>
                            <p>{el.body}</p>
                        </Card>
                    </div>
                )}
            </>

        </div>
    )
}

export default Usequery
