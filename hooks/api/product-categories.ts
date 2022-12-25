import { useEffect } from 'react';
import { IHookRes } from 'interface/res-api';
import { TProductCategory } from 'interface/product-categories';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'redux-local/actions/product-category';

function useGetPCategSaga(): IHookRes<TProductCategory> {
  const pCategCalls = useSelector((state: any) => state.productscategory);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(initGetPCateg('lol'));
    dispatch({ type: Actions.GET_PCATEG_REQUESTED, payload: 'hello' });
  }, [dispatch]);

  return {
    isLoading: pCategCalls.isLoading,
    isError: pCategCalls.isError,
    data: pCategCalls.data
  };
}

export default {
  useGetPCategSaga
};
