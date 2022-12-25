// jest.setup.js

import '@testing-library/jest-dom/extend-expect';

import mockServer from './__mocks__/api/server';

beforeAll(() => mockServer.listen());

afterEach(() => mockServer.resetHandlers());

afterAll(() => mockServer.close());