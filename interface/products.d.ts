import { IApiRes } from './res-api';

interface IImage {
  id: number;
  attributes: {
    url: string;
  };
}

export interface IProductsData {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    stock: number;
    product_category: {
      data: {
        id: number;
        attributes: {
          name: string;
          description: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
    };
    image: {
      data: IImage[];
    };
  };
}

export type TProducts = IApiRes<IProductsData[]>;

export type TProductDetail = IApiRes<IProductsData>;
