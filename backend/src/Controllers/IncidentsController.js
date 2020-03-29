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
  },
//=>>IncDelete
  async delete(req, res){
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    const incident = await connect('incidents')
      .where('id', id)
      .select('ong_id')
      .first()
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({error: 'operation not permited'});
    }
    await connect('incidents').where('id', id).delete();
    return res.status(204).send();
  },
//=>>IncUpdate
  async patch(req, res){
    
  }
};
