import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { END } from "redux-saga";

import { Avatar, Card } from "antd";
import AppLayout from "../components/AppLayout";
import wrapper from "../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";

const About = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title> NodeBirde </title>
      </Head>
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              짹짹 <br />
              {userInfo.Posts}
            </div>,
            <div key="followings">
              팔로잉 <br />
              {userInfo.Followings}
            </div>,
            <div key="followers">
              팔로워 <br />
              {userInfo.Followers}
            </div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
            title={me.nickname}
          />
          {/* <Button onClick={onLogout} loading={logOutLoading}>
            로그아웃
          </Button> */}
        </Card>
      ) : null}
    </AppLayout>
  );
};

export const getStaticPorps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
    data: 1,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPropmise();
});

export default About;
