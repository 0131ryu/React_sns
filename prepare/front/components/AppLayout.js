import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { Menu, Input, Row, Col, Button } from "antd";
const { Search } = Input;
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const SearchInput = styled(Search)`
  vertical-align: "middle";
`;

const onSearch = (value) => console.log(value);

const items = [
  { label: <Link href="/">노드버드</Link>, key: "item-1" },
  { label: <Link href="/profile">프로필</Link>, key: "item-2" },
  {
    label: <SearchInput placeholder="검색하기" onSearch={onSearch} />,
    key: "item-3",
  },
  { label: <Link href="/signup">회원가입</Link>, key: "item-4" },
];

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu items={items} mode="horizontal" />
      {children}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          테스트
        </Col>
        <Col xs={24} md={6}>
          <Button
            type="link"
            href="https://ba-gotocode131.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            블로그
          </Button>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
