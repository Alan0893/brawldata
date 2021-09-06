class Brawlers {
  constructor(data) {
    this.list = data.list
  }
  
  /**
  * @param {string} name Brawler Name
  * @description get Brawler by name
  * @returns {object} object
  */
  getBrawlerByName (name) {
    if(name.includes("."))
    {
      name = name.split(".").map((word) => word.toLowerCase().replace(word.toLowerCase()[0],word[0].toUpperCase())).join(".")
    }
    if(name.includes(" "))
    {
      name = name.split(" ").map((word) => word.toLowerCase().replace(word.toLowerCase()[0],word[0].toUpperCase())).join("-")
    }
    return this.list.filter(b => b.hash == name).length > 0 ? this.list.filter(b => b.hash == name) : TypeError("Invalid Brawler Name")
  }
  
  /**
  * @param {string} id Brawler ID
  * @description get Brawler by ID
  * @returns {object} object
  */
  getBrawlerById (id) {
    return this.list.filter(b => b.id == id).length > 0 ? this.list.filter(b => b.id == id) : TypeError("Invalid Brawler ID")
  }
  
  /**
   * @returns {Array} list of brawler names
   */
  getBrawlersNames () {
    return this.list.map(b => b.name)
  }
  
  /**
   * @returns {Array} list of starpowers
   */
  getBrawlersStarPowers () {
    return this.list.map(b => b.starPowers)
  }
  
  /**
   * @returns {Array} list of gadgets
   */
  getBrawlersGadgets () {
    return this.list.map(b => b.gadgets)
  }
  
  /**
   * @returns {Array} list of videos
   */
  getBrawlersVideos () {
    return this.list.map(b => b.videos)
  }
}

module.exports = Brawlers
