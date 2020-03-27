const connect = require('../database/connection');

module.exports = {
//=>>List
  async index(req, res){
    const ong_id = req.headers.authorization;
    const incidents = await connect('incidents')
      .where('ong_id', ong_id)
      .select('*');
    res.json(incidents);
  }
};
