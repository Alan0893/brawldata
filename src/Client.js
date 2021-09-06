
const HTTP          = require('./HTTP')
const Events        = require('./Events')
const Brawlers      = require('./Brawlers')
const Maps          = require('./Maps')
const Modes         = require('./Modes')
const Records       = require('./Records')
const Icons         = require('./Icons')

class Client {
  /**
   * @param no token needed
   */
  constructor() {
    this.http = new HTTP(this)
  }
  
  async getEvents() {
    return new Events(await this.http.getEvents())
  }
  
  async getBrawlers() {
    return new Brawlers(await this.http.getBrawlers())
  }
  
  async getMaps() {
    return new Maps(await this.http.getMaps())
  }
  
  async getModes() {
    return new Modes(await this.http.getModes())
  }
  
  async getRecords() {
    return new Records(await this.http.getRecords())
  }
  
  async getIcons() {
    return new Icons(await this.http.getIcons())
  }
}

module.exports = Client
