const brawldata = require("..")        //includes the brawldata module
const client = new brawldata.Client()

;(async() => {
  //Fetches the Events endpoint
  //https://brawlapi.com/#/endpoints/events
  const events = client.getEvents()
  /**
  * AVAILABLE METHODS
  * getActiveMapBySlot(slot)
  * getUpcomingMapBySlot(slot)
  */
  
  //Fetches the Brawlers endpoint
  //https://brawlapi.com/#/endpoints/brawlers
  const brawlers = client.getBrawlers()
  /**
  * AVAILABLE METHODS
  * getBrawlerByName(name)
  * getBrawlerById(id)
  * getBrawlersNames()
  * getBrawlersStarPowers()
  * getBrawlersGadgets()
  * getBrawlersVideos()
  */
  
  //Fetches the Maps endpoint
  https://brawlapi.com/#/endpoints/maps
  const maps = client.getMaps()
  /**
  * AVAILABLE METHODS
  * getMapByName(name)
  * getMapById(id)
  * getMapNames()
  */
  
  //Fetches the Modes endpoint
  //https://brawlapi.com/#/endpoints/gamemodes
  const modes = client.getModes()
  /**
  * AVAILABLE METHODS
  * getModesById(slot)
  */
  
  //Fetches the Records endpoint
  //https://brawlapi.com/#/endpoints/records
  const records = client.getRecords()
  /**
  * AVAILABLE METHODS
  * getRecordById(id)
  */
  
  //Fetches the Icons endpoint
  //https://brawlapi.com/#/endpoints/icons
  const icons = client.getIcons()
  /**
  * AVAILABLE METHODS
  * getPlayerIconById(id)
  * getClubIconById(id)
  */

  /** 
  * In addition to the methods, you can also access specific properties
  * Official documentation of BrawlAPI can be found at: https://brawlapi.com/#/
  * Errors Handling: https://brawlapi.com/#/Errors
  */
  
  
  //.....
})()
