/* eslint-disable import/no-cycle */
/* eslint-disable no-useless-catch */
import { api } from 'modules/container/api/instance';
import { API } from 'utils/constant';
import { IAuthRes, ILoginReq, IRegisterReq } from './interface/auth';

export async function loginApi(payload: ILoginReq): Promise<IAuthRes> {
  try {
    const { data } = await api.post(API.AUTH.login, payload);
    return data;
  } catch (error: any) {
    throw error;
  }
}

export async function registerApi(payload: IRegisterReq): Promise<IAuthRes> {
  try {
    const { data } = await api.post(API.AUTH.register, payload);
    return data;
  } catch (error: any) {
    throw error;
  }
}
