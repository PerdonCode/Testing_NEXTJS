// ESM
import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import showsHandler from 'next';
import { readFakeData } from '../__mocks__/fakeData';

test("/api/shows returns shows from db", async () => {
  await testApiHandler({
    handler: showsHandler,
    test: async ({ fetch }) => {
      const res = await fetch({ method: 'GET' });
      expect(res.status).toBe(200);
      const json = await res.json();

    const {fakeShows} = await readFakeData();
    expect(json).equal({shows: fakeShows})


    }
  });
})
  
