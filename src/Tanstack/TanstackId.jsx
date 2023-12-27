import React from 'react'
import { useParams } from "react-router-dom";
import { PostQuerybyID } from './tanstack-query/postsQuery';


const styles = {
   display : 'flex',
   flexDirection : 'column',
   justifyContent : 'center',
   alignItems : 'center',
   margin : '1%'
}
const TanstackId = () => {
    const { id } = useParams()

    const { isPending, error, data } = PostQuerybyID(id)

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div style={styles}>
            <h2> Tanstack : {id} </h2>
            <br />
            <h3>Title:</h3>
            <p>{data.title}</p>
            <br />
            <h3>Description:</h3>
            <p>{data.body}</p>
        </div>
    )
}

export default TanstackId
