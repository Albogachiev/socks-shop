const { Favorite } = require('../../db/models');

const deleteController = async (req, res) => {
  try {
    const { id } = req.body;
    await Favorite.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (err) {
    res.send(`Error ------> ${err}`);
  }
};

module.exports = deleteController;
