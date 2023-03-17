/* eslint-disable import/no-cycle */
/* eslint-disable no-useless-catch */
import { api } from 'modules/container/api/instance';
import { API } from 'utils/constant';
import { IGetPostResObj, ICreatePost } from './interface/post';

export async function getPostApi(): Promise<IGetPostResObj> {
  try {
    const { data } = await api.get(API.POST.post);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createPostApi(payload: ICreatePost, onProgress: any): Promise<string> {
  try {
    const { data } = await api.post(API.POST.post, payload, { onDownloadProgress: onProgress });
    return data;
  } catch (error) {
    throw error;
  }
}
