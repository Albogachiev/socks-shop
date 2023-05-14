const renderTemplate = require('../../lib/renderReactModule');
const Favorites = require('../views/Favorites');
const { Favorite } = require('../../db/models');

const renderFavoritesController = async (req, res) => {
  const user_id = req.session?.user_id;
  const user = req.session?.user;
  try {
    const favoritesList = await Favorite.findAll({ where: { user_id }, raw: true });
    renderTemplate(Favorites, { favoritesList, user }, res);
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { renderFavoritesController };
