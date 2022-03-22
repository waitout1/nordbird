import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import useInput from '../hooks/useInput';

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.me?.id);
    const [commentText, onChangeCommentText] = useInput('');
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText)
        
    }, [commentText]);
    return (
        <Form onFinish={onSubmitComment}> 
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}></Input.TextArea>
                <Button type="primary" htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>
    );
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;