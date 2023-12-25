import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deletePostbyId, editPostbyId, getPostbyId } from '../services/api.service';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Modal, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import './page.css'
import Comments from './Comments';

const { Meta } = Card;
const { TextArea } = Input

const Post = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [postId, setPostId] = useState({})

    useEffect(() => {
        getPostbyId(id).then(postData => {
            // post.value = {...postData}
            setPostId({ ...postData })
        })
    }, [id])

    // Edit Popup 
    const [open1, setOpen1] = useState(false);
    const [confirmLoading1, setConfirmLoading1] = useState(false);
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const showModal1 = () => {
        setTitle(postId.title)
        setBody(postId.body)
        setOpen1(true);
    };
    const handleOk1 = () => {
        setConfirmLoading1(true);
        editPostbyId(id, title, body).then(() => {
            setPostId(prev => ({
                ...prev, title: title, body: body
            }))
            setOpen1(false)
            setConfirmLoading1(false)
        }).then(err => {
            console.error("Error occured during update : ", err);
        })
    };
    const handleCancel1 = () => {
        setOpen1(false);
    };

    // Delete Popup
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('');

    const showModal = () => {
        setModalText('Due to wish to delete this ?')
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('Deleting...');
        setConfirmLoading(true);
        deletePostbyId(id).then(() => {
            navigate('/home')
        }).catch(err => {
            setModalText('Due to wish to delete this ?')
            console.error("Error occured during delete : ", err);
        })


    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='post'>
                <Card
                    hoverable
                    style={{
                        width: 280,
                    }}
                    cover={<img alt="example" src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg" width={200} height={300} />}
                >
                    <Meta title={postId.title} description={postId.body} />
                    <div className="actions">
                        <div className="edit">
                            <Button type="primary" onClick={showModal1}>
                                <EditOutlined style={{ color: 'white', width: '20px', height: '20px' }} />
                                Edit
                            </Button>
                            <Modal
                                title="Edit"
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
                        <div className="delete">
                            <Button type="primary" danger onClick={showModal}>
                                <DeleteOutlined style={{ color: 'white', width: '20px', height: '20px' }} />
                                Delete
                            </Button>
                            <Modal
                                title="Delete"
                                open={open}
                                onOk={handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={handleCancel}
                            >
                                <p>{modalText}</p>
                            </Modal>
                        </div>
                    </div>
                </Card>
                <div className="comments">
                    <Comments id={id} />
                </div>
            </div>
            
        </>

    )
}

export default Post
