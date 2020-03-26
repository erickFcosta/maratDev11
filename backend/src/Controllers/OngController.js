const connect = require('../database/connection');
const crypto = require('crypto');

module.exports = {

//=>>ListOng's
  async index(req, res){
    const ongs = await connect('ongs').select('*');
    return res.json(ongs);
  },
//=>>CreateOng
  async create(req, res){
    const id = crypto.randomBytes(4).toString('HEX')
    const {name, email, whatsapp, city, uf} = req.body;
    await  connect('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    return res.json({ id });
  }
};
