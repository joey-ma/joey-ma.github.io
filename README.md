# joey-ma.github.io

A fresh start!

### Installation

```bash
npm run setup
```

### Local Development

```bash
npm run dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Building for Production

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Running Your Production Build

```bash
npm run start
```

This command runs the server in production mode.

### Deployment



```bash
npm run deploy
```

## Development Journey

I am definitely inspired by the [new Strapi starter with Next.js 13](https://strapi.io/blog/introducing-the-new-strapi-starter-with-nextjs13-tailwind-and-typescript) (deployed [here](https://strapi-starter-local-setup-jk3ncp3c0-paulbratslavsky.vercel.app/en)), but I also wanted to be a bit more involved in the set up process and set things up with how I like things (a combined formula of what I consider to be industry best practices with the inclusion of some of my personal preferences). So here goes...

Following Strapi's [Quick Start](https://docs.strapi.io/dev-docs/quick-start) Guide, run: 

```zsh
npx create-strapi-app@latest backend
```

within project root directory, but with my preferences:

```
? What would you like to name your project? .
? Choose your installation type Custom (manual settings)
? Choose your preferred language JavaScript
? Choose your default database client postgres
? Database name: supabase
? Host: 127.0.0.1
? Port: 5432
? Username: ******
? Password: ******
? Enable SSL connection: Yes
```

Following Next.js's [Installation](https://nextjs.org/docs/getting-started/installation) Guide, run:

```zsh
npx create-next-app@latest frontend
```

within project root directory, also with my preferences:

```
✔ What is your project named? … frontend
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
```
