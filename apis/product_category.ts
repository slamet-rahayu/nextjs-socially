/* eslint-disable no-useless-catch */
import axios from 'axios';
import { TProductCategory } from 'interface/product-categories';

async function getProductCategory(): Promise<TProductCategory> {
  try {
    const data = await axios.get('/strapi/api/product-categories');
    return data.data;
  } catch (error) {
    throw error;
  }
}

export default {
  getProductCategory
};
