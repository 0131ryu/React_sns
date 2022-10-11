import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const PostCardContent = ({ postData }) => (
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v, i) => {
      //수정 전까진 바뀔 일 없음
      if (v.match(/(#[^\s#]+)/)) {
        return (
          <Link href={`/hastag/${v.slice(1)}`} key={i}>
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
);

PostCardContent.PropTypes = { postData: PropTypes.string.isRequired };

export default PostCardContent;
