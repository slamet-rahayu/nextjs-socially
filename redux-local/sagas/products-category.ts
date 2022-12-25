import { call, put, takeEvery } from 'redux-saga/effects';
import { TProductCategory } from 'interface/product-categories';
import productCategory from 'apis/product_category';
import Actions from '../actions/product-category';
import { getPCateg, failGetPCateg, doneGetPcateg } from '../reducers/products-category';

function* pCategFetch() {
  try {
    const data: TProductCategory = yield call(() => productCategory.getProductCategory());
    yield put(getPCateg(data));
  } catch (error) {
    yield put(failGetPCateg());
  } finally {
    yield put(doneGetPcateg());
  }
}

export default function* pCategSaga() {
  yield takeEvery(Actions.GET_PCATEG_REQUESTED, pCategFetch);
}
