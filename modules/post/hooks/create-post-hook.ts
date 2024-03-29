import { useSelector, useDispatch } from 'react-redux';
import { createPost, createPostClear } from '../post-actions';
import { ICreatePostState, ICreatePost } from '../interface/post';

export default function useCreatePost() {
  const dispatch = useDispatch();

  const {
    createPost: { createPostRes, createPostFailed, isLoading, isError, progress }
  } = useSelector((state: ICreatePostState) => state);

  const dispatchCreatePost = (payload: ICreatePost) => {
    dispatch(createPost(payload));
  };

  const clearCreatePost = () => {
    dispatch(createPostClear());
  };

  return {
    isLoading,
    isError,
    createPostRes,
    createPostFailed,
    progress,
    dispatchCreatePost,
    clearCreatePost
  };
}
