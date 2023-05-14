const { Favorite } = require('./db/models')

async function seedFavorites(user_id, color, print, pattern, link) {
  await Favorite.create({user_id: user_id, color: color, print: print, pattern: pattern, link: link })
}
seedFavorites(1, 'red', '123', '123', '12')
