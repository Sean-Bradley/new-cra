# New-CRA

New `create-react-app`

If you want to create a new app named `my-app` then use the command below.

```bash
npx new-cra my-app
```

After the installation has finished

```bash
cd my-app
npm start
```

Visit http://127.0.0.1:3000

You can use a different name other than `my-app` if you wish. Just use that other name in place of `my-app` in the above commands.

E.g.,

```bash
npx new-cra super-amazing-react-website
cd super-amazing-react-website
npm start
```

## Updating `new-cra`

`new-cra` is occasionally updated. So, to ensure that you are using the latest version of `new-cra`, run,

```bash
npx new-cra@latest
```

You could also update, and create at the same time, just to save time.

```bash
npx new-cra@latest my-app
```

## Typescript

You can also create a TypeScript React project by adding the `-ts` flag.

```bash
npx new-cra@latest my-app -ts
```

## Trouble shooting

### Error : `ENOENT: no such file or directory, lstat`

When running `npx` commands, you may get an error stating that it cannot find `lstat`.

Open a command/bash/powershell prompt and run

```bash
npm install -g npm
```

## About

New-CRA (New Create-React-APP) will build a basic React template/starter/boilerplate for you.

It uses [R3F-Pack](https://github.com/Sean-Bradley/R3F-Pack) under the hood to build your production and development code.

As long as you have [Node](https://nodejs.org/en/download) installed on your computer, you should then be able to just open a command prompt and type,

```bash
npx new-cra my-app
```

And it will create a new basic React template/starter/boilerplate that you can now start developing your new application from.

Happy Hacking!

Sean
