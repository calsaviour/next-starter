<div align="center" >
  <h1 
    align="center"
    style="text-decoration:underline;text-decoration-style:dashed"
  >NextJS Starter Template with Passwordless Auth (custom Magic-links)</h1>
  <a href="https://github.com/trpc/trpc/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/trpc/trpc" />
  </a>
  <a href="https://twitter.com/lohxt">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40lohxt&style=social&url=https%3A%2F%2Ftwitter.com%2Flohxt" />
  </a>
  <br />
  <br />
</div>

<p align="center" style="font-weight:400;font-size:20px;">
  A barebones NextJS, Tailwind, Prisma starter template which uses magic-links for paswordless auth.
</p>

## Tech Stack

- **[Next.js](https://nextjs.org/) – framework**
- **[Typescript](https://www.typescriptlang.org/) – language**
- **[Tailwind](https://tailwindcss.com/) – CSS**
- **[Prisma](https://prisma.io/) – ORM**
- **[PostgreSQL](https://railway.app/) – database**
- **[NextAuth.js](https://next-auth.js.org/) – auth**
- **[Vercel](https://vercel.com/) – hosting**

## Additional plugins/libraries

**prettier-plugin-sort-imports** - To sort all the imports in a particular order
**prettier-plugin-tailwindcss** - To sort the tailwind classnames
**clsx** & **tailwind-merge** - To organize and improve the readabilty of the tailwind classes

## Running locally

> .env

- Using the `.env.example` file as reference, create a `.env` file with valid values.

> Install Modules

- Run `npm install`
  (node v16.7.0 was used at the time of creation)

> Prisma

- Modify the schema if required and validate it by running `npx prisma validate`
- Run `npx prisma db push`
  (make sure you have the right DATABASE_URL in env file)

> Running the app

- `npm run dev`
