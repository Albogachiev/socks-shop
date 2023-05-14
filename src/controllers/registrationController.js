const bcrypt = require('bcrypt');

const renderTemplate = require('../../lib/renderReactModule');
const Registration = require('../views/Registration');
const { User } = require('../../db/models');

const renderRegistration = (req, res) => {
  const user = req.session?.user;
  renderTemplate(Registration, { user }, res);
};

const registrationUser = async (req, res) => {
  const { email, name, password } = req.body;
  if (email && name && password) {
    const checkIfEmailExists = await User.findOne({ where: { email } });
    if (checkIfEmailExists) {
      res.json({ emailExists: 'This mail is already in use' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ email, name, password: hash });
      req.session.user = user.name;
      req.session.user_id = user.id;
      req.session.save(() => {
        res.json({ registration: 'Done' });
      });
    }
  }
};

module.exports = { renderRegistration, registrationUser };
