import axios from 'axios'

const getPosts = async () => {
    try {
        let posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return [...posts.data]
    }
    catch (error) {
        console.error("Error in get fetch of post : ", error);
    }
}

const getPostbyId = async (id) => {
    try {
        let post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return { ...post.data }
    }
    catch (error) {
        console.error("Error in get fetch of post : ", error);
    }
}

const editPostbyId = async (id, title, desc) => {
    try {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: title,
                body: desc,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        return true
    }
    catch (error) {
        console.error("Error in get fetch of post : ", error);
    }
    return false
}

const deletePostbyId = async (id) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        return true
    }
    catch (error) {
        console.error("Error in get fetch of post : ", error);
    }
    return false
}


const createNewPost = async (title, desc) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: desc,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        return response.data
    } catch (error) {
        console.error("Error occured during post :", error);
    }
}

const getComments = async(id)=>{
    try {
        let comments = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        return [...comments.data]
    } catch (error) {
        console.error("Error occured during comments : ",error);
    }
}

export { getPosts, getPostbyId, editPostbyId, deletePostbyId, createNewPost , getComments }