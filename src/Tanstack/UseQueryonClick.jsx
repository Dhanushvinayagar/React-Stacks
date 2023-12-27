import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Card, Button } from 'antd';
import './tanstack.css'

const UseQueryonClick = () => {

    const postsData = () => axios.get('http://localhost:5080/posts').then(res => res.data)

    const { isLoading, error, data , refetch} = useQuery({
        queryKey: ['postsData'],
        queryFn: postsData,
        enabled : false         //  Prevent data to fetch 
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <div className='top'>
                <h2>Posts data Click :  </h2>
                <Button type='primary' onClick={refetch}>View Data</Button>
            </div>
            <>
                {data && data?.map((el, index) =>
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

export default UseQueryonClick
