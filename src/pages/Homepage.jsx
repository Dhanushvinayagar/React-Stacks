import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Card } from 'antd';
import useStore from '../store/store.js'
import { getPosts } from '../services/api.service.js';

const { Meta } = Card;

const Homepage = () => {
  const navigate = useNavigate();
  const { posts, setPosts } = useStore()

  useEffect(() => {
    getPosts().then(postData => {
      setPosts(postData);
    }).catch(err => {
      console.error("Error occured during post fetch : ", err);
    })
  }, [])

  return (
    <>
      <Card title="Posts">
        {
          posts.map((post, index) => (
            <Card.Grid   key={index} onClick={() => navigate(`/post/${post.id}`) }>
              <Card
                cover={<img alt="example" src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg" />}
              >
                <Meta title={index+1 + ') '+ post.title.slice(0,10)} description={post.body.slice(0,100) + '.....'} />
              </Card>
            </Card.Grid>
          ))
        }

      </Card>
    </>
  )
}

export default Homepage
