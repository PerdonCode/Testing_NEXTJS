// ESM
import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import showsHandler from '@/pages/shows/index';
import showsIdHandler from '@/pages/shows/[showId]';
import { readFakeData } from '../__mocks__/fakeData';

test(" get /api/shows returns shows from db", async () => {
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
  
test("get /api/shows/[showsId] returns the data for the correct show ID", async () => {
await testApiHandler({
  handler: showsIdHandler,
  paramsPatcher: (params) => {
    params.showId = 0;
  },
  test: async({fetch}) =>{
    const res = await fetch({method: "GET"});
    expect(res.status).toBe(200);

    const json = await res.json();
    const {fakeShows} = await readFakeData();
    expect(json).equal({show: fakeShows[0]})
  },
});
});