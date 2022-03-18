import React, { useCallback }from 'react';
import { Card, Avatar, Button} from 'antd';
import PropTypes from 'prop-types';


const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">짺짹<br/>0</div>,
                <div key="follwings">팔로잉<br/>0</div>,
                <div key="follwers">팔로워<br/>0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}

UserProfile.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default UserProfile;