class Modes {
  constructor(data) {
    this.list = data.list
  }
  
  /**
  * @param {string} id Mode ID
  * @description get mode by ID
  * @returns false if the mode does not exist || object if mode exists
  */
  getModeById(id) {
    let slotById = this.list.filter(s => s.id === id)
    return slotById.length > 0 ? slotById : false
  }
}

  module.exports = Modes
