import axios from 'axios'
import { useQuery, useQueries } from '@tanstack/react-query'

const postsData = () => axios.get('http://localhost:5080/posts').then(res => res.data)
const postsDatabyID = (id) => axios.get(`http://localhost:5080/posts/${id}`).then(res => res.data)
const postsDatawithID = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:5080/posts/${id}`).then(res => res.data)
}
const commentDataID = () => axios.get(`http://localhost:5080/comments`).then(res => res.data)

// First letter Caps
const PostQuery = () => useQuery({
    queryKey: ['postsData'],
    queryFn: postsData,                             // should not be function referenced
})

const PostQuerybyID = (id) => useQuery({
    queryKey: ['postsDataId'],
    queryFn: () => postsDatabyID(id),                   // should be function refernced
})

const PostQuerywithID = (id) => useQuery({
    queryKey: ['postsDatawithId', id],
    queryFn: postsDatawithID,
})

const CommentsQuery = (id) => useQuery({
    queryKey: ['commentDataId'],
    queryFn: commentDataID,
    select: (data) => {
        return data.filter(post => post.postId === id)
    }
})

const DynamicQuerying = (array) =>
    useQueries({
        queries: array.map((id) => {
            return {
                queryKey: ['postsDatausingId', id],
                queryFn: postsDatawithID,
            }
        }),
    })


export { PostQuery, PostQuerybyID, CommentsQuery, PostQuerywithID, DynamicQuerying }