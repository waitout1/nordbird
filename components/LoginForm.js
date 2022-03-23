import React, { useCallback, useMemo } from 'react';
import Link from 'next/Link'
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'

import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    marginTop: 10px;
`

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
    const [email, onChangeEmail] = useInput('12@a.com');
    const [password, onChangePassword] = useInput('12');
    const dispatch = useDispatch();
    const { logInLoading } = useSelector((state) => state.user);
    

    // const [id, setId] = useState('12');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // },[]);

    // const [password, setPassword] = useState('12');
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // },[]);

    // styled-components 안쓸때 사용하는 방법
    const style = useMemo(() => ({ marginTop: 10 }), []);
    
    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        console.log(dispatch);
        dispatch(
            loginRequestAction({ email, password })
        );
        // setIsLoggedIn(true);
    }, [email, password]) 

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-email'>이메일</label>
                <br></br>
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
            </div>
            <div>
            <label htmlFor='user-password'>비밀번호</label>
                <br></br>
                <Input 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}


// LoginForm.propTypes = {
    // setIsLoggedIn: PropTypes.func.isRequired,
// }



export default LoginForm;