import React, { useCallback, useMemo } from 'react';
import Link from 'next/Link'
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    marginTop: 10px;
`

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, onChangeId] = useInput('12');
    const [password, onChangePassword] = useInput('12');

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
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]) 

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br></br>
                <Input name="user-id" value={id} onChange={onChangeId} required />
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
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}


LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}



export default LoginForm;