# Neo feed

## Starting the dev server

Make sure you have the latest Stable or LTS version of Node.js installed.

1. `git clone ...`
2. Run `npm install` or `yarn install`
3. rename config/config.example.js to index.js and add api key
4. Start the dev server using `npm start`
5. Open [http://localhost:8080](http://localhost:8080)

## Available Commands

- `npm start` - start the dev server
- `npm clean` - delete the dist folder
- `npm run production` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode
- `npm run coverage` - generate code coverage report in the `coverage` folder

## Production code

Run `npm run production`. The production-ready code will be located under `dist` folder.

