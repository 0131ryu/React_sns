import { Form, Input, Button } from "antd";
import React, { useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { addPost } from "../reducers/post";
// import { addPost } from "../store/postSlice";

// const dummyPost = {
//   id: 2,
//   content: "더미데이터입니다.",
//   User: {
//     id: 1,
//     nickname: "제로초",
//   },
//   Images: [],
//   Comments: [],
// };

const PostForm = () => {
  const { imagePaths, addPostDone, addPostLoading } = useSelector(
    (state) => state.post
  );
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput("");

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  // const onChangeText = useCallback((e) => {
  //   setText(e.target.value);
  // }, []); -> useInput 사용

  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
    // setText("");
  }, [text]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input
        showCount
        maxLength={140}
        onChange={onChangeText}
        placeholder="어떤 새로운 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button
          type="primary"
          style={{ float: "right" }}
          htmlType="submit"
          loading={addPostLoading}
        >
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
          </div>;
        })}
      </div>
    </Form>
  );
};

export default PostForm;
