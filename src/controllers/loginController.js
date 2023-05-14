const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const renderTemplate = require('../../lib/renderReactModule');
const Login = require('../views/Login');

const renderLogin = (req, res) => {
  const user = req.session?.user;
  renderTemplate(Login, { user }, res);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email }, raw: true });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.user = user.name;
        req.session.user_id = user.id;
        req.session.save(() => {
          res.json({ logIn: 'Done' });
        });
      } else {
        res.json({ error: 'Invalid password' });
      }
    } else {
      res.json({ notFound: 'User not found' });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { renderLogin, loginUser };
