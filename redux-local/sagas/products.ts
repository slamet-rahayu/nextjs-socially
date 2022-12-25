import { call, put, takeEvery } from 'redux-saga/effects';
import { TProducts, TProductDetail } from 'interface/products';
import products from 'apis/products';
import { PayloadAction } from '@reduxjs/toolkit';
import Actions from '../actions/products';
import {
  getProducts,
  getProduct,
  doneGetProducts,
  doneGetProduct,
  failGetProduct,
  failGetProducts
} from '../reducers/products';

type TPayload = number;

function* productsFetch(action: PayloadAction<TPayload>) {
  try {
    const { payload } = action;
    const data: TProducts = yield call(() => products.getProduct(payload));
    yield put(getProducts(data));
  } catch (error) {
    yield put(failGetProducts());
  } finally {
    yield put(doneGetProducts());
  }
}

function* productDetailFetch(action: PayloadAction<any>) {
  try {
    const { payload } = action;
    const data: TProductDetail = yield call(() => products.getProductDetail(payload));
    yield put(getProduct(data));
  } catch (error) {
    yield put(failGetProduct());
  } finally {
    yield put(doneGetProduct());
  }
}

export default function* productsSaga() {
  yield takeEvery(Actions.GET_PRODUCTS_REQUESTED, productsFetch);
  yield takeEvery(Actions.GET_PRODUCT_REQUESTED, productDetailFetch);
}
