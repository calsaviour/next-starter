<div align="center" >
  <h1 
    align="center"
    style="text-decoration:underline;text-decoration-style:dashed"
  >TodoX</h1>
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
  An minimal authenticated todo app. Can be used as a starter template to build things upon.
</p>

## Tech Stack

- **[Next.js](https://nextjs.org/) – framework**
- **[Typescript](https://www.typescriptlang.org/) – language**
- **[Tailwind](https://tailwindcss.com/) – CSS**
- **[PostgreSQL](https://railway.app/) – database**
- **[NextAuth.js](https://next-auth.js.org/) – auth**
- **[Vercel](https://vercel.com/) – hosting**

## Implementation

**TodoX** is built as a standard Next.js application with a customizable **[Middleware](https://nextjs.org/docs/advanced-features/middleware)**

**Optimistic UI** achieved by the **[SWR](https://github.com/vercel/swr)** _react hook_ for _data fetching_

**[PostgreSQL](https://www.railway.app/)** is used as the database for storing user data and todos. You can refer to the _Prisma schema_ **[here](/prisma/schema.prisma)**.
