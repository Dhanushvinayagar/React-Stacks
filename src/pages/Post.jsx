import React, { useEffect, useState } from 'react'
// import { signal} from '@preact/signals'
import { useParams } from 'react-router-dom'
import { getPostbyId } from '../services/api.service';

// const post = signal({});

const Post = () => {
    const { id } = useParams()
    const [postId , setPostId] = useState({})
    useEffect(()=>{
        getPostbyId(id).then(postData=>{
            // post.value = {...postData}
            setPostId({...postData})
        })
        console.log(postId);

    },[id])

    return (
        <div>
            Post : {id}
            <p>
                {
                    postId.title
                }
            </p>
            <p>
                   {
                    postId.body
                   }
            </p>
        </div>
    )
}

export default Post
