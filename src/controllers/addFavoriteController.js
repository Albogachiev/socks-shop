const { Favorite } = require('../../db/models');

async function linkGenerator() {
  let str = 'aqwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789'
  let link = ''
  for(let i = 1; i <= 15; i++) {
    link += str[Math.floor(Math.random() * str.length)]
  }
  return link
}

const addFavorite = async (req, res) => {
  let link = await linkGenerator();
  const { colorName, fonName, printsName } = req.body;
  const user = req.session?.user_id;
  await Favorite.create({ user_id: user, color: colorName, print: fonName, pattern: printsName, link })
};

module.exports = { addFavorite }
