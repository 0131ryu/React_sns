import shortId from "shortid";
import produce from "immer";
import { faker } from "@faker-js/faker";

export const initialState = {
  mainPosts: [
    // {
    //   id: 1,
    //   User: {
    //     id: 1,
    //     nickname: "제로초",
    //   },
    //   content: "첫 번째 게시글 #익스포트 #테스트",
    //   Images: [
    //     {
    //       id: shortId.generate(),
    //       src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
    //     },
    //     {
    //       id: shortId.generate(),
    //       src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
    //     },
    //     {
    //       id: shortId.generate(),
    //       src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
    //     },
    //   ],
    //   Comments: [
    //     {
    //       id: shortId.generate(),
    //       User: {
    //         id: shortId.generate(),
    //         nickname: "nero",
    //       },
    //       content: "우와 개정판이 나왔군요~",
    //     },
    //     {
    //       id: shortId.generate(),
    //       User: {
    //         id: shortId.generate(),
    //         nickname: "hero",
    //       },
    //       content: "얼른 사고싶어요~",
    //     },
    //   ],
    // },
  ],
  singlePost: null,
  imagePaths: [],
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
};

//무한 스크롤링
// export const generateDummyPost = (number) =>
//   Array(number)
//     .fill()
//     .map(() => ({
//       id: shortId.generate(),
//       User: {
//         id: shortId.generate(),
//         nickname: faker.internet.userName(),
//       },
//       content: faker.lorem.paragraph(),
//       Images: [{ src: faker.image.cats() }],
//       Comments: [
//         {
//           User: {
//             id: shortId.generate(),
//             nickname: faker.internet.userName(),
//           },
//           content: faker.word.adjective(),
//         },
//       ],
//     }));

//더미테이터
// initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

//UPLOAD_IMAGES_REQUEST
export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

// const dummyPost = (data) => ({
//   id: data.id,
//   content: data.content,
//   User: {
//     id: 1,
//     nickname: "제로초",
//   },
//   Images: [],
//   Comments: [],
// });

// const dummyComment = (data) => ({
//   id: shortId.generate(),
//   content: data,
//   User: {
//     id: 1,
//     nickname: "제로초",
//   },
// });

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // add post
      case ADD_POST_REQUEST: {
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      }
      case ADD_POST_SUCCESS: {
        // action.data.content, postId, userId 받음
        draft.addPostLoading = false;
        draft.addPostDone = true;
        // draft.mainPosts.unshift(dummyPost(action.data), ...state.mainPosts);
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      }
      case ADD_POST_FAILURE: {
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      }
      // comment
      case ADD_COMMENT_REQUEST: {
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      }
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        // post.Comments.unshift(dummyComment(action.data.content));
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        // const postIndex = state.mainPosts.findIndex(
        //   (v) => v.id === action.data.postId
        // );
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };
      }
      case ADD_COMMENT_FAILURE: {
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      }
      case ADD_POST_REQUEST: {
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      }
      case ADD_POST_SUCCESS: {
        // action.data.content, postId, userId 받음
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts = unshift(dummyPost(action.data));
        break;
      }
      case ADD_POST_FAILURE: {
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      }
      //remove post
      case REMOVE_POST_REQUEST: {
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      }
      case REMOVE_POST_SUCCESS: {
        // action.data.content, postId, userId 받음
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(
          (v) => v.id !== action.data.PostId
        );
        break;
      }
      case REMOVE_POST_FAILURE: {
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      }
      //무한 스크롤링
      case LOAD_POSTS_REQUEST: {
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      }
      case LOAD_POSTS_SUCCESS: {
        // action.data.content, postId, userId 받음
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;
      }
      case LOAD_POSTS_FAILURE: {
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      }
      //like
      case LIKE_POST_REQUEST: {
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      }
      case LIKE_POST_SUCCESS: {
        // action.data.content, postId, userId 받음
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers.push({ id: action.data.UserId });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }
      case LIKE_POST_FAILURE: {
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      }
      //unlike
      case UNLIKE_POST_REQUEST: {
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;
      }
      case UNLIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }
      case UNLIKE_POST_FAILURE: {
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      }
      //upload
      case UPLOAD_IMAGES_REQUEST: {
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      }
      case UPLOAD_IMAGES_SUCCESS: {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
      case UPLOAD_IMAGES_FAILURE: {
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      }
      case REMOVE_IMAGE: {
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      }
      //retweet
      case RETWEET_REQUEST: {
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;
      }
      case RETWEET_SUCCESS: {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }
      case RETWEET_FAILURE: {
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;
      }
      //한 개 게시글만 로딩
      case LOAD_POST_REQUEST: {
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      }
      case LOAD_POST_SUCCESS: {
        // action.data.content, postId, userId 받음
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;
      }
      case LOAD_POST_FAILURE: {
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      }
      default:
        break;
    }
  });
};

export default reducer;
