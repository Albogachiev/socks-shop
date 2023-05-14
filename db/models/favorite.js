'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Favorite.init({
    user_id: DataTypes.INTEGER,
    color: DataTypes.STRING,
    print: DataTypes.STRING,
    pattern: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
