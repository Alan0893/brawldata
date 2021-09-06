class Icons {
  constructor(data) {
    this.player = data.player
    this.club   = data.club
  }
  
  /**
  * @param {string} id Player icon ID
  * @description get player icon by ID
  * @returns {object} object
  */
  getPlayerIconById(id) {
    let pId = this.player[id]
    return pId ? pId : false
  }
  
  /**
  * @param {string} id Club icon ID
  * @description get Club icon by ID
  * @returns {object} object
  */
  getClubIconById(id) {
    let cId = this.club[id]
    return cId ? cId : false
  }
}

module.exports = Icons
