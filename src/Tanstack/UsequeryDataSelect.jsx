import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const styles = {
    display: 'flex',
    background: '#e6ecff',
    margin: '1% 3% 0 3%',
}

const UsequeryDataSelect = () => {

    const postsData = () => axios.get('http://localhost:5080/posts').then(res => res.data)

    const { isPending, error, data } = useQuery({
        queryKey: ['postsData'],
        queryFn: postsData,

        // data transformataion / formatting
        select: (data) => {
            //  call any function that transforms your data to a format
            return data.map(post => post.title)
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            <h2>Posts data :</h2>
            {data.map((el, index) => (
                <div key={index} style={styles}>
                    <p>{index + 1 + ' | '}</p>
                    <p>{el}</p>
                </div>
            ))}
        </>
    )
}

export default UsequeryDataSelect
