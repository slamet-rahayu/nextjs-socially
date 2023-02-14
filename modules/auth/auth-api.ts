/* eslint-disable no-useless-catch */
import { api } from 'modules/container/api/instance';
import { API } from 'utils/constant';
import { ILoginRes, ILoginReq } from './interface/login';

export async function loginApi(payload: ILoginReq): Promise<ILoginRes> {
  try {
    const { data } = await api.post(API.AUTH.login, payload);
    return data;
  } catch (error: any) {
    throw error;
  }
}
