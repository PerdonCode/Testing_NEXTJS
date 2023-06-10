// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// polyfill necesary for jsdom test environment
import {TextDecoder, TextEncoder} from 'util';

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder

// src/setupTests.js
import { server } from './__tests__/__mocks__/msw/server'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())