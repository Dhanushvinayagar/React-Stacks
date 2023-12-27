import React, { useState } from 'react'
import { CommentsQuery, PostQuerywithID } from './tanstack-query/postsQuery'
import { Card } from 'antd';

const ParallelQuery = () => {
    const [id, setId] = useState(1)
    const { isLoading: postLoading, error: postError, data: post } = PostQuerywithID(Number(id))
    const { isLoading: commentLoading, error: commentError , data: comments } = CommentsQuery(Number(id))

    if (postLoading || commentLoading) return 'Loading...'
    if (postError || commentError) return 'Error : '

    return (
        <div>
            ParallelQuery
            <input type='number' min={1} max={10} value={id} onChange={(e) => setId(e.target.value)} />

            <Card title={post.title} style={{ width: '90%' }}>
                <p>{post.body}</p>
                {comments.map((comment, index) =>
                    <Card title={comment.name} bordered={false} style={{ width: '75%' }} key={index} >
                        <p style={{ color: 'blue' }}>{comment.email}</p>
                        <p>{comment.body}</p>
                    </Card>
                )}

            </Card>
        </div>
    )
}

export default ParallelQuery
