class Records {
  constructor(data) {
    this.data = data
  }
  
  /**
  * @param {string} id Brawler ID
  * @description get Record by Brawler ID
  * @returns {object} object
  */
  getRecordById (id) {
    let recordById = this.data[id]
    return recordById ? recordById : false
  }
}

module.exports = Records
