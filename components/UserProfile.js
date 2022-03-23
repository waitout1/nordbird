import React, { useCallback }from 'react';
import { Card, Avatar, Button} from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { logoutRequestAction } from '../reducers/user'

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector((state) => state.user);

    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
        // setIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">짺짹<br/>{me.Posts.length}</div>,
                <div key="follwings">팔로잉<br/>{me.Followings.length}</div>,
                <div key="follwers">팔로워<br/>{me.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>me.nickname[0]</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>
    );
}

// UserProfile.propTypes = {
    // setIsLoggedIn: PropTypes.func.isRequired,
// }

export default UserProfile;