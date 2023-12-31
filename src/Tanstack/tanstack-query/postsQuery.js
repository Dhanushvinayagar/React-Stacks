import axios from 'axios'
import { keepPreviousData, useQuery, useQueries, useInfiniteQuery } from '@tanstack/react-query'

const postsData = () => axios.get('http://localhost:5080/posts').then(res => res.data)

const postsDatabyID = (id) => axios.get(`http://localhost:5080/posts/${id}`).then(res => res.data)

const postsDatawithID = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:5080/posts/${id}`).then(res => res.data)
}

const studentDatabyId = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:5080/student/${id}`).then(res => res.data)
}

const staffDatabyId = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:5080/staff/${id}`).then(res => res.data)
}

const commentDataID = () => axios.get(`http://localhost:5080/comments`).then(res => res.data)

const colorData = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:5080/colors?_limit=2&_page=${id}`).then(res => res.data)
}

const allcolorData = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:5080/colors?_limit=2&_page=${pageParam}`).then(res => res.data)
}

// First letter Caps
const PostQuery = () => useQuery({
    queryKey: ['postsData'],
    queryFn: postsData,                             // should not be function referenced
})

const PostQuerybyID = (id, queryClient) => useQuery({
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

const StudentQuery = (id) => useQuery({
    queryKey: ['student', id],
    queryFn: studentDatabyId
})
const StaffQuery = (id) => useQuery({
    queryKey: ['staff', id],
    queryFn: staffDatabyId
})


const ColorQuery = (pageNo) => useQuery({
    queryKey: ['color', pageNo],
    queryFn: colorData,
    placeholderData: keepPreviousData
})

const ColorInfiniteQuery = () => useInfiniteQuery({
    queryKey: ['colors'],
    queryFn: allcolorData,
    getNextPageParam : (_lastPage , pages) =>{
        if(pages.length < 3){
            return pages.length +1
        }else{
            return;
        }
    }
})

export { PostQuery, PostQuerybyID, CommentsQuery, PostQuerywithID, DynamicQuerying, StudentQuery, StaffQuery, ColorQuery, ColorInfiniteQuery }