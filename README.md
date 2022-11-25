# Event Timer/CountDown

## Problem brief

Create a Countdown website that helps the user count-down to an event or special occasion in their life. It helps them know the time left to an event.

## How it works

- They can visit the homepage, click a button "Create new countdown", and enter the reason.
- A new page is created where that countdown shows in big font. E.g I can create a countdown for when **HNG9** ends and I get a page like **countdowner.com/hng9**. Visiting that page will show me the countdown period.

## To get started

first you would need to clone the project using the following code

```bash
$ mkdir countdown

cd countdown

$ git clone https://github.com/eezzy2k3/countdown.git .

cd server
```

Next you need to run the npm install command to get your packages into the project

```bash
    npm install
```

To run the backend server, you need to run the command

```js
npm start
```

you should get a response like this

```js
'server running on http://localhost:3000'
```

Finally, you can test your server API's using Postman or any other testing platform.

You can also run the test script using:

```Node.js
npm test
```

results will be

```js
> countdown@1.0.0 test
> mocha ./src/utils/test.js

Db is connected
app is listening on port :3000


  /GET countDown route status
    ✔ it should GET the countdown page status (345ms)


  1 passing (418ms)
```

## Contributors

1. [Soliu yusuf](https://github.com/whalay)
2. [Gbose Israel](https://github.com/eezzy2k3)
3. [boiOctave](https://github.com/boiOctave)
4. [Oisamoje Victor](https://github.com/Oisavictor)