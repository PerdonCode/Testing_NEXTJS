# Popular Concert Venue

### An app to support the Udemy course [Testing Next.js Apps](https://www.udemy.com/course/nextjs-testing/)

## Installation

1. Run `npm install`
1. Run `cp .env.development.local_template .env.development.local`
1. Run `cp .env.test.local_template .env.test.local`
1. Run `cp .env.local_template .env.local`
1. In _.env.local_and _env.test.local_:

- add long, hard-to-guess strings as the values for `NEXTAUTH_SECRET` and `REVALIDATION_SECRET`

  - command to generate a random string: `openssl rand -hex 32` 

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000]
#   N e x t J S _ T e s t i n g _ C o u r s e 
 
 

<!-- // different tests could be
// users with no shows reserved
// show with no tickets available
// show with tickets available
// show with tickets available but user has already reserved them
// show with tickets available but user has already reserved them and they are past the reservation time 

// option 1 differen handlers for different tests
// option 2 make use of the Id in the url parak
  // samen handler returns different result based on ID -->