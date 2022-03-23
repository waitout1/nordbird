import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST, addComment } from '../reducers/post'

import { addPost } from '../reducers/post';

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const { addCommentDone, addCommentLoding } = useSelector((state) => state.post);
    const [commentText, onChangeCommentText, setCommentText] = useInput('');
    console.log(`id : ${id}`);
    useEffect(() => {
        if(addCommentDone){
            setCommentText('');
        }
    }, [addCommentDone]);

    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText)
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, userId: id, postId: post.id },
          });
    }, [commentText, id]);
    return (
        <Form onFinish={onSubmitComment}> 
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}></Input.TextArea>
                <Button type="primary" htmlType="submit"
                loading={addCommentLoding}>삐약</Button>
            </Form.Item>
        </Form>
    );
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;