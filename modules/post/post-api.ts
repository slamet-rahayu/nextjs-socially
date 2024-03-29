/* eslint-disable import/no-cycle */
/* eslint-disable no-useless-catch */
import { api } from 'modules/container/api/instance';
import { API } from 'utils/constant';
import qs from 'qs';
import { IGetPostResObj, IGetPostParam } from './interface/post';

export async function getPostApi({ userId, postId }: IGetPostParam): Promise<IGetPostResObj> {
  try {
    const queryObj = {};
    if (userId) {
      Object.assign(queryObj, { userId });
    }
    if (postId) {
      Object.assign(queryObj, { postId });
    }
    const query = qs.stringify(queryObj);
    const { data } = await api.get(`${API.POST.post}?${query}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createPostApi(payload: FormData, onProgress: any): Promise<string> {
  try {
    const { data } = await api.post(API.POST.post, payload, { onDownloadProgress: onProgress });
    return data;
  } catch (error) {
    throw error;
  }
}
