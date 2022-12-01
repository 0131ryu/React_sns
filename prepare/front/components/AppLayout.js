import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { Menu, Input, Row, Col, Button } from "antd";
const { Search } = Input;
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { createGlobalStyle } from "styled-components";
import useInput from "../hooks/useInput";
import Router from "next/router";

const Global = createGlobalStyle`
.ant-row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.ant-col:first-child {
    padding-left: 0 !important;
}

.ant-col:last-child {
  padding-right: 0 !important;
}
`;

const SearchInput = styled(Search)`
  vertical-align: "middle";
`;

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  const [searchInput, onChangeSearchInput] = useInput("");

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <div>
      <Global />
      <Menu
        items={[
          { label: <Link href="/">노드버드</Link>, key: "item-1" },
          {
            label: (
              <Link href="/profile" prefetch={false}>
                프로필
              </Link>
            ),
            key: "item-2",
          },
          {
            label: (
              <SearchInput
                enterButton
                value={searchInput}
                onChange={onChangeSearchInput}
                onSearch={onSearch}
              />
            ),
            key: "/search",
          },
          { label: <Link href="/signup">회원가입</Link>, key: "item-4" },
        ]}
        mode="horizontal"
      />

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
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
