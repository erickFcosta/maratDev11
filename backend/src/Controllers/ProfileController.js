const connect = require('../database/connection');

module.exports = {
//=>>List
  async index(req, res){
    const ong_id = req.headers.authorization;
    const incidents = await connect('incidents')
      .where('ong_id', ong_id)
      .select('*');
    res.json(incidents);
  },
//=>>DeleteOng
  async delete(req, res){
    const id = req.headers.authorization;
    const ong = await connect('ongs')
      .where('id', id)
      .select('*')
      .first()

//=>>error redundante //if (ong.id != id) {
    //  return res.status(401).json({error: 'operation not permited'});
    //}
    if (!ong) {
      return res.status(400).json({ error: "no ONG found with this ID" })
    }
    await connect('incidents').where('ong_id', id).delete();
    await connect('ongs').where('id', id).delete();
    return res.send(ong.name+' deleted');
  }
};
