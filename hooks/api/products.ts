import { useEffect } from 'react';
import { IHookRes } from 'interface/res-api';
import type { TProducts, TProductDetail } from 'interface/products';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'redux-local/actions/products';

type TProductID = string | string[] | undefined;

function useGetProuductsSaga(): IHookRes<TProducts> {
  const productCalls = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: Actions.GET_PRODUCTS_REQUESTED });
  }, [dispatch]);
  return {
    isLoading: productCalls.isLoading,
    isError: productCalls.isError,
    data: productCalls.data
  };
}

function useGetProuductSaga(id?: TProductID): IHookRes<TProductDetail> {
  const productCalls = useSelector((state: any) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch({ type: Actions.GET_PRODUCT_REQUESTED, payload: id });
    }
  }, [dispatch, id]);
  return {
    isLoading: productCalls.isLoading,
    isError: productCalls.isError,
    data: productCalls.data
  };
}

export default {
  useGetProuductsSaga,
  useGetProuductSaga
};
