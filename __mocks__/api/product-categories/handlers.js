import { rest } from 'msw';

const handlers = [rest.get('/strapi/api/product-categories')];
