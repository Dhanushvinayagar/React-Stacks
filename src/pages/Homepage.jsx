import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Card } from 'antd';
import useStore from '../store/store.js'
import { createNewPost, getPosts } from '../services/api.service.js';
import { Button, Modal, Input } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons'
import './page.css'
const { Meta } = Card;
const { TextArea } = Input;

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

  // create popup
  const [open1, setOpen1] = useState(false);
  const [confirmLoading1, setConfirmLoading1] = useState(false);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const showModal1 = () => {
    setOpen1(true);
  };
  const handleOk1 = () => {
    setConfirmLoading1(true);
    createNewPost(title, body).then((newData) => {
      setOpen1(false)
      setPosts([...posts , { 
        id : newData.id,
        title:title,
        body : body,
        userId : 1
      }])
    }).then(err => {
      console.error("Error occured during post : ", err);
    })
  };
  const handleCancel1 = () => {
    setOpen1(false);
  };

  return (
    <>
      <div className="create-post">
        <Button type="primary" onClick={showModal1}>
          <PlusSquareOutlined style={{ color: 'white', width: '20px', height: '20px' }} />
          Add post
        </Button>
        <Modal
          title="Add new post"
          open={open1}
          onOk={handleOk1}
          confirmLoading={confirmLoading1}
          onCancel={handleCancel1}
        >   <p>Title:</p>
          <Input value={title} placeholder={title} onChange={(e) => setTitle(e.target.value)} />
          <p>Description:</p>
          <TextArea rows={4} value={body} onChange={(e) => { setBody(e.target.value) }} />
        </Modal>

      </div>

      <Card title="Posts">
        {
          posts.map((post, index) => (
            <Card.Grid key={index} onClick={() => navigate(`/post/${post.id}`)}>
              <Card
                cover={<img alt="example" src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg" />}
              >
                <Meta title={index + 1 + ') ' + post.title.slice(0, 10)} description={post.body.slice(0, 100) + '.....'} />
              </Card>
            </Card.Grid>
          ))
        }

      </Card>
    </>
  )
}

export default Homepage
