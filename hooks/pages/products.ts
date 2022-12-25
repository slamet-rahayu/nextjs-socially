/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import Actions from 'redux-local/actions/products';

interface IUseProduct {
  changePage: (page: number | string) => void;
}

export default function useProductPages(): IUseProduct {
  const dispatch = useDispatch();
  function changePage(page: number | string): void {
    dispatch({ type: Actions.GET_PRODUCTS_REQUESTED, payload: page });
  }

  return {
    changePage
  };
}
