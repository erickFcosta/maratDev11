const connect = require('../database/connection');

module.exports = {
  async create(req, res){
    const {id} = req.body;
    const ong = await connect('ongs')
      .where('id', id)
      .select('name')
      .first(); //=>para não retornar um array (onlyResult)
    if (!ong) {
      return res.status(400).json({ error: "no ONG found with this ID" })
    }
    return res.json(ong);
  }
};
