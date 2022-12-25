import { rest } from 'msw';
import fixtures from './fixtures';

const handlers = [
  rest.get('/strapi/api/userinfo', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fixtures.userInfo));
  })
];

export default handlers;
