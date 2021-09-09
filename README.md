# brawldata.js
**API Wrapper for BrawlAPI.**

## Getting Started
1. To install this package, in your console run: `npm install brawldata.js`
2. You have now installed the package!

## Example
```javascript
const brawldata = require("brawldata.js")

const client = new brawldata.Client()

;(async() => {
  const events = await client.getEvents()
  const brawlers = await client.getBrawlers()
  console.log(brawlers)
  //...
})()
```

For specific object properties, official api can be found [here](https://brawlapi.com/#/).

**__Some methods contain data that are only provided by Brawlify. Be sure to credit Brawlify when accessing those endpoints.__**
Endpoints include:
1. Events
2. Brawlers
3. Maps
4. Records

<img src="https://cdn.brawlify.com/front/Star.svg" height="15" width="20" alt="Brawlify"> This package uses data collected by [Brawlify](https://brawlify.com/).
