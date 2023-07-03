const fetch = require('node-fetch')
const baseURL = 'https://api.brawlapi.com/v1/'

const APIError = require('./APIError')

class HTTP {
  constructor(client) {
    this.client = client
  }

  getHeaders() {
    return {
      Accept: 'application/json'
    }
  }

  async requestAsync(endpoint) {
    const res = await fetch(baseURL + endpoint, {
      headers: this.getHeaders()
    })
    if (!res.ok) throw new APIError(res, await res.text())
    return await res.json()
  }
  
  async getEvents() {
    return await this.requestAsync(`events`)
  }
  
  async getBrawlers() {
    return await this.requestAsync(`brawlers`)
  }
  
  async getMaps() {
    return await this.requestAsync(`maps`)
  }
  
  async getModes() {
    return await this.requestAsync(`gamemodes`)
  }
  
  async getIcons() {
    return await this.requestAsync(`icons`)
  }

  /*async getRecords() {
    return await this.requestAsync(`records`)
  }*/
}

module.exports = HTTP
