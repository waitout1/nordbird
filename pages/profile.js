import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const follwerList = [{ nickname: "제로초" }, { nickname: "바보" }, { nickname: "노드버드오피셜" },]
    const follwingList = [{ nickname: "제로초2" }, { nickname: "바보2" }, { nickname: "노드버드오피셜2" },]
    return (
        <>
            <Head>
                <title>내프로필 | NodeBird</title>
            </Head>
            
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={follwerList}/>
                <FollowList header="팔로워 목록" data={follwingList}/>
            </AppLayout>
        </>
    )
};

export default Profile;