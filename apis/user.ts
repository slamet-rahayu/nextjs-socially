/* eslint-disable no-useless-catch */
import axios from 'axios';
import { IUserRes } from 'interface/user';

async function getUserInfo(jwtToken: string): Promise<IUserRes> {
  try {
    const data = await axios.get('/strapi/api/userinfo', {
      headers: { Authorization: `Bearer ${jwtToken}` }
    });
    return data.data;
  } catch (error) {
    throw error;
  }
}

export default {
  getUserInfo
};
