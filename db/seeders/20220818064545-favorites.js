module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Favorites', [{
      user_id: 1,
      color: 'asf',
      print: 'asfasgdg',
      pattern: 'sdv',
      link: 'sdbhh',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      color: 'xbhdf',
      print: 'sdhhsf',
      pattern: 'sdgqa',
      link: 'adg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
