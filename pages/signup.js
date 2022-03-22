import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components'

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelection } from 'react-redux';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
    const dispatch = useDispatch();
    const { signUpLoading } = useSelection((state) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');

    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPassworkdCheck] = useState('');
    const [passwordError, setPassworkdError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPassworkdCheck(e.target.value);
        setPassworkdError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);
    // const [nickname, setNickname] = useState('');
    // const onChangeNickname = useCallback((e) => {
    //     setNickname(e.target.value);
    // }, []);
    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);
 
    const onSubmit = useCallback(() => {
        if(password !== passwordCheck){
            return setPassworkdError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(email, nickname, password);
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname}
        });
    }, [password, passwordCheck, term]);

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <div>회원가입 페이지</div>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br />
                    <Input name="user-email" value={email} onChange={onChangeEmail} required />
                </div>
                <div>
                    <label htmlFor="user-id">닉네임</label>
                    <br />
                    <Input name="user-id" value={nickname} onChange={onChangeNickname} required />
                </div>
                <div>
                    <label htmlFor="user-id">비밀번호</label>
                    <br />
                    <Input name="user-id" value={password} type="password" onChange={onChangePassword} required />
                </div> 
                <div>
                    <label htmlFor='user-password-check'>비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name= "user-term" checked={term} onChange={onChangeTerm}>제로초 말 ??</Checkbox>
                    {termError && <ErrorMessage>약관에 동의해주세요</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10}}>
                     <Button type="primary" htmlType="submit" loading={signUpLoading} >회원가입</Button>
                </div>
            </Form>
        </AppLayout>
    )
};

export default Signup;