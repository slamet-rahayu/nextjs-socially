import { useSelector, useDispatch } from 'react-redux';
import { getPost, getPostClear } from '../post-actions';
import { IGetPostState } from '../interface/post';

export default function useGetPost() {
  const dispatch = useDispatch();

  const {
    getPost: { getPostRes, getPostFailed, isLoading, isError }
  } = useSelector((state: IGetPostState) => state);

  const dispatchGetPost = () => {
    dispatch(getPost());
  };

  const clearGetPost = () => {
    dispatch(getPostClear());
  };

  return {
    isLoading,
    isError,
    getPostRes,
    getPostFailed,
    dispatchGetPost,
    clearGetPost
  };
}
