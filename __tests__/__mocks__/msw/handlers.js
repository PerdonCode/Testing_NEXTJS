import { rest } from 'msw';
import { readFakeData } from '../fakeData';
import { fakeUserReservations } from '../fakeData/userReservations';


export const handlers = [
  rest.get("http://localhost:3000/api/shows/:showId", async (req, res, ctx) => {
    const {fakeShows} = await readFakeData();
    const {showId} = req.params;
    // index / showId = 0 has seats avaiable in fake data
        // index / showId = 1 has no seats avaiable in fake data
    return res(ctx.json({show: fakeShows[Number(showId)]}))
  }),

  rest.get("http://localhost:3000/api/users/:showId/reservations", (req, res, ctx) => {
    const{userId} = req.params;
    // return fakeUserReservations if userId is 1; empty array otherwise
    const userReservation = Number(userId) === 1 ? fakeUserReservations : [];
    return res(ctx.json({userReservation}))
  })
];