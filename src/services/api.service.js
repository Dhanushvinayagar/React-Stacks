import axios from 'axios'

const getPosts = async() =>{
    let posts = []
    await axios.get("https://jsonplaceholder.typicode.com/posts").then((postData)=>{
        posts = [...postData.data]
    })
    return posts
}

export default getPosts