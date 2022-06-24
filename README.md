NOTES: As of June 23th, 2022,


## Demo

https://soda-machine.vercel.app

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/mikeycalendo/soda-machine&project-name=soda-machine&repository-name=soda-machine)

### Clone and Deploy

Download this repository via git:

```bash
git clone https://github.com/mikeycalendo/soda-machine.git
```


Hello!

This app was built for a job interview proccess. In a real world production environment, it would be recommended to trim all unused dependencies, stylesheets, components, etc.

How it works:

The public and auth routes are predeterminded through the use of middleware in the /routes folder, and App.js file. Unregistered users are able to signin, register, browse the public soda-machine, and make a fake purchase (we are just downloading a json object representation of the soda data) without being authenticated in the system. The app also serves as an admin dashboard for registered or hardwired users such as employees of the soda company. The authenticated API routes allow users to update product prices, add more inventory, and also update their  user email address.

There is also a next.js app called optimized-soda-images that was built to take advantage of Next.js's edge _middleware functionality and makes serving static assets super easy. In this app the soda images are served at the edge by next.js _middleware routes by parsing the png to a blob and then returning it as the response body.

___Getting_Started___

- Vercel currently builds the application with no problem. Using bash => `$ npx vercel`
- Deploy to production: Using bash => `$ npx vercel --prod`
- Local: Using bash => `$ npm run start`

___Suggestions___
This app currently requires a node version <= 15. A few working solutions are 
1. Use a lower Node version in developement. I used v14.18.1 just out of habit. bash => `$ nvm use v14.18.1`
2. Trim unneeded dependencies, style sheets, etc... and upgrade from node-sass.
3. Build a Docker image.

by Mike Calendo <mikeycalendo@gmail.com># soda-machine
# soda-machine
