const connect = require('../database/connection');
const crypto = require('crypto');

module.exports = {

//=>>ListOng's
  async index(req, res){
    //=>> exemplo =>> const ong = req.headers.authorization;
    const {page = 1} = req.query;
    const [count] = await connect('ongs').count();
    const ongs = await connect('ongs')
      //=>> exemplo =>> .where('id', ong)
      .limit(5)
      .offset((page - 1) * 5).select('*');
    res.header('X-Total-Count', count['count(*)']);
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
