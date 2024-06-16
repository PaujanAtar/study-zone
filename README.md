This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

On this code, i create a mock API by utilizing localstorage data to get all the data needed for the pages. The data used on this project is located on the src/data folder, and utilized via the loader.tsx that exists on the same directory.

to sum up the logic behind the data mocking, upon loading the code will upload the data to local storage and then the corresponding page will get the data through localstorage.getitem.



P.S. i also know how to fetch and handle api via async function, also the security by using .env. but currently, i'm in no condition to create a new code because of the inavailability of a formidable coding device. i'm sorry for this inconvenience.
