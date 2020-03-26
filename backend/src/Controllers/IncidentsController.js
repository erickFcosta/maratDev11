const connect = require('../database/connection');

module.exports = {
//=>>IncidentsList
  async index(req, res){
    const incidents = await connect('incidents').select('*');
    return res.json(incidents);
  },
//=>>IncidentsCreate
  async create(req, res){
    const {title, description, value} = req.body;
    const ong_id = req.headers.authorization;
    const [id] = await connect('incidents').insert({
      title,
      description,
      value,
      ong_id
    });
    return res.json({ id });
  }
};
