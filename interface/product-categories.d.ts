import { IApiRes } from './res-api';

export interface IProductCategData {
  id: number;
  attributes: {
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export type TProductCategory = IApiRes<IProductCategData[]>;
