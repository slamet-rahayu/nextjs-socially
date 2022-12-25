/* eslint-disable no-useless-catch */
import axios from 'axios';
import qs from 'qs';
import { TProducts, TProductDetail } from 'interface/products';

type TDetail = string | string[] | undefined;
type TProduct = number;

async function getProduct(page: TProduct = 1): Promise<TProducts> {
  try {
    const query = qs.stringify({
      populate: {
        image: {
          fields: ['url']
        },
        product_category: {
          populate: '*'
        }
      },
      pagination: {
        limit: 5,
        start: page > 1 ? (page - 1) * 5 : 0
      }
    });
    const data = await axios.get(`/strapi/api/products?${query}`);
    return data.data;
  } catch (error) {
    throw error;
  }
}

async function getProductDetail(id?: TDetail): Promise<TProductDetail> {
  try {
    const params = qs.stringify({
      populate: {
        image: {
          fields: ['url']
        },
        product_category: {
          fields: ['name']
        }
      }
    });
    const data = await axios.get(`/strapi/api/products/${id}?${params}`);
    return data.data;
  } catch (error: any) {
    throw error;
  }
}

export default {
  getProduct,
  getProductDetail
};
