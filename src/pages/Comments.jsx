import React from 'react'
import { signal, effect } from '@preact/signals'
import { getComments } from '../services/api.service'
import { Card } from 'antd'
import './page.css'

const comments = signal([])

const Comments = ({ id }) => {

    effect(() => {
        getComments(id).then(comment => {
            comments.value = [...comment]
        })
    })

    return (
        <>
            <Card title="Comments">
                {comments.value.map((el, index) =>
                (
                    <div className='comment' key={index}>
                        <Card type="inner" title={el.name.slice(0,20)} extra={<p style={{color : 'blue'}}>{el.email}</p>}>
                            {el.body}
                        </Card>
                    </div>
                ))}
            </Card >
        </>
    )
}

export default Comments