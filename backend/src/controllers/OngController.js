const crypto = require('crypto')
const connection = require('../database/connection');

module.exports = {

  async root(request, response) {
    return response.json({
      evento: "Omnistack 11 - ONGS",
      aluno: "Freddymais"
    })
  },

  async index(request, response) {
    return response.json(await connection('ongs').select('*'))
  },

  async create(request, response) {
    console.log('request body = ' + request.body)

    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id })
  }
}