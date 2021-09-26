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

##  Methods
**__[Events Endpoint](https://brawlapi.com/#/endpoints/events):__**
```javascript
const events = client.getEvents()
```
  **AVAILABLE METHODS**
  * getActiveMapBySlot(slot)
  * getUpcomingMapBySlot(slot)
  
**__[Brawler Endpoint](https://brawlapi.com/#/endpoints/brawlers):__**
```javascript
const brawlers = client.getBrawlers()
```
  **AVAILABLE METHODS**
  * getBrawlerByName(name)
  * getBrawlerById(id)
  * getBrawlersNames()
  * getBrawlersStarPowers()
  * getBrawlersGadgets()
  * getBrawlersVideos()
  
**__[Map Endpoint](https://brawlapi.com/#/endpoints/maps):__**
```javascript
const maps = client.getMaps()
```
  **AVAILABLE METHODS**
  * getMapByName(name)
  * getMapById(id)
  * getMapNames()
  
**__[Modes Endpoint](https://brawlapi.com/#/endpoints/gamemodes):__**
```javascript
const modes = client.getModes()
```
  **AVAILABLE METHODS**
  * getModesById(slot)
  
**__[Records Endpoint](https://brawlapi.com/#/endpoints/records):__**
```javascript
const records = client.getRecords()
```
  **AVAILABLE METHODS**
  * getRecordById(id)
  
**__[Icons Endpoint](https://brawlapi.com/#/endpoints/icons):__**
```javascript
const icons = client.getIcons()
```
  **AVAILABLE METHODS**
  * getPlayerIconById(id)
  * getClubIconById(id)

## Errors
|Code	| Message |
| --- | --- |
|200 |	OK - Response was successfully fetched.|
|403	| Forbidden - Resource not found, check URL parameters.|
|5XX | Cloudflare errors.|

## Additional Information
* In addition to the methods, you can also access specific properties, which can be found [here](https://brawlapi.com/#/)
* Official documentation of BrawlAPI can be found at: https://brawlapi.com/#/
* Usage: https://brawlapi.com/#/Authentication
* Errors Handling: https://brawlapi.com/#/Errors

**__Some endpoints contain very CPU-intensive data, such as solo or team statistics. Due to the nature of how expensive and time-intensive the collection and maintenance of this data is, [Brawlify](https://brawlify.com/) asks you to credit the source of the data and not create the impression that your application collects this data.__**
Endpoints include, but are not limited to:
1. Events
2. Maps
3. Records

<img src="https://cdn.brawlify.com/front/Star.svg" height="15" width="20" alt="Brawlify"> This package uses data collected by [Brawlify](https://brawlify.com/).
