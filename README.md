# brawldata
**API Wrapper for BrawlAPI.**

## Getting Started
1. To install this package, in your console run: `npm install brawldata`
2. You have now installed the package!

### To clone this repository
1. To install this package, in your console run: `git clone https://github.com/Alan0893/brawldata.git` 
2. In your package.json, add `"brawldata": "file:brawldata"` in your dependencies
3. You have now installed the package!

#### Problems with `git`
> **'git' is not recognized as an internal or external command, operable program or batch file.**
If you get the error stated above, follow the instructions below:
1. Open VS Code
2. Hit `ctrl + ,`
3. In the seach bar, type `git path`
4. Click `add this path`
5. You should now be able to use `git` in VS Code

## Example
```javascript
const brawldata = require("brawldata")        //includes the brawldata module
const client = new brawldata.Client()

;(async() => {
  const events = client.getEvents()
  const brawlers = client.getBrawlers()
  //.....
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
