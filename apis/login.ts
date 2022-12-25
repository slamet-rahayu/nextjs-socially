/* eslint-disable no-useless-catch */
import axios from 'axios';
import { ILoginRes, IloginParam } from 'interface/login';

async function loginApi(body: IloginParam): Promise<ILoginRes> {
  try {
    const data = await axios.post('/strapi/api/auth/local', {
      identifier: body.identifier,
      password: body.password
    });
    return data.data;
  } catch (error: any) {
    throw error;
  }
}

export default {
  loginApi
};
