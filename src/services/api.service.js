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
        return { ...post.data}
    }
    catch (error) {
        console.error("Error in get fetch of post : ", error);
    }
}
export { getPosts , getPostbyId }