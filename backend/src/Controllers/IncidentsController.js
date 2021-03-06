const connect = require('../database/connection');

module.exports = {
//=>>IncidentsList
  async index(req, res){
    const {page = 1} = req.query;
          //=>>[count] = count[0]
    const [count] = await connect('incidents').count();
    const incidents = await connect('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page - 1) * 5)
    .select(['incidents.id',
      'incidents.title',
      'incidents.description',
      'incidents.value',
      'ongs.name',
      'ongs.email',
      'ongs.whatsapp',
      'ongs.city',
      'ongs.uf'
    ]);

    res.header('X-Total-Count', count['count(*)']);
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
  async update(req, res){
    const ong_id = req.headers.authorization;
    const {id} = req.params;
    const {title, description, value} = req.body;
    const incident = await connect('incidents')
      .where('id', id)
      .select('ong_id')
      .first()
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({error: 'operation not permited'});
    }
    await connect('incidents').where('id', id).update({
      title,
      description,
      value
    })
    const update = await connect('incidents')
      .where('id', id)
      .select()
      .first()
    return res.json(update);
  }
};
