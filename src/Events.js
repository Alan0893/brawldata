class Events {
  constructor(data) {
    this.active      = data.active
    this.upcoming    = data.upcoming
  }
  
  /**
  * @param {string} id Active Map Slot ID
  * @description get active map by slot ID
  * @returns false if the map does not exist || object if the map is active
  */
  getActiveMapBySlot(slot) {
    let slotById = this.active.filter(s => s.slot.id === slot)
    return slotById.length > 0 ? slotById : false
  }
  
  /**
  * @param {string} id Upcoming Map Slot ID
  * @description get upcoming map by slot ID
  * @returns false if the map does not exist || object if the map is upcoming
  */
  getUpcomingMapBySlot(slot) {
    let slotById = this.upcoming.filter(s => s.slot.id === slot)
    return slotById.length > 0 ? slotById : false
  }
}

module.exports = Events
