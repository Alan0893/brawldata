class Maps {
  constructor(data) {
    this.list = data.list
  }
  
  /**
  * @param {string} name Map Name
  * @description get Map by name
  * @returns {object} object
  */
  getMapByName (name) {
    let mapN = name.split(" ").map((word) => word.toLowerCase().replace(word.toLowerCase()[0],word[0].toUpperCase())).join("-")
    return this.list.filter(m => m.hash == mapN).length > 0 ? this.list.filter(m => m.hash == mapN) : TypeError("Invalid Map Name")
  }
  
  /**
    * @param {string} id Map ID
  * @description get Map by ID
  * @returns {object} object
  */
  getMapById (id) {
    return this.list.filter(m => m.id == id).length > 0 ? this.list.filter(m => m.id == id) : TypeError("Invalid Brawler ID")
  }
  
  /**
   * @returns {Array} list of map names
   */
  getMapNames () {
    return this.list.map(m => m.name)
  }
}

module.exports = Maps
