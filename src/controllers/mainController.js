const renderTemplate = require('../../lib/renderReactModule');
const Main = require('../views/Main');

const renderMain = (req, res) => {
  const user = req.session?.user;
  renderTemplate(Main, { user }, res);
};

module.exports = { renderMain };
