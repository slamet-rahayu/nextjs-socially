/* eslint-disable import/no-cycle */
/* eslint-disable no-useless-catch */
import { api } from 'modules/container/api/instance';
import { API } from 'utils/constant';
import { IGetProfileRes } from './interface/profile-interface';

export async function getProfileApi(): Promise<IGetProfileRes> {
  try {
    const { data } = await api.get(API.USER.profile);
    return data;
  } catch (error) {
    throw error;
  }
}
