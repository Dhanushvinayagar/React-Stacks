import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const postsData = () => axios.get('http://localhost:5080/posts').then(res => res.data)
const postsDatabyID = (id) => axios.get(`http://localhost:5080/posts/${id}`).then(res => res.data)

// First letter Caps
const PostQuery = () => useQuery({
    queryKey: ['postsData'],
    queryFn: postsData,                             // should not be function referenced
})

const PostQuerybyID = (id) => useQuery({
    queryKey: ['postsDataId'],
    queryFn: () => postsDatabyID(id),                   // should be function refernced
})
0
export { PostQuery, PostQuerybyID }