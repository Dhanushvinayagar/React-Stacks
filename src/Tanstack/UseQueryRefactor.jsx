import React from 'react'
import { Card } from 'antd';
import './tanstack.css'
import { PostQuery } from './tanstack-query/postsQuery';

const UseQueryRefactor = () => {

    const { isPending, error, data } = PostQuery()

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

export default UseQueryRefactor
