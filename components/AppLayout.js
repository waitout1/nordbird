import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Link from 'next/Link'
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'

const SearchInput = styled(Input.Search)` 
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <div> 
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link href="/"><a>노드버드</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/profile"><a>프로필</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <SearchInput enterButton style={{  }}/>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/signup"><a>회원가입</a></Link>
                    </Menu.Item>
                </Menu>
                <Row gutter={8}>
                    <Col xs={24} md={6}>
                        {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                    </Col>
                    <Col xs={24} md={12}>
                        {children}
                    </Col>
                    <Col xs={24} md={6}>
                        오른쪽 메뉴
                        <a href="https:/naver.com" target="_blank" rel="noreferrer noopener">naver</a>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;