const render = require('../../lib/renderReactModule');
const CartViev = require('../views/Cart');
const { sequelize, User, Cart } = require('../../db/models');
//const { main } = require('./contactController');

require('dotenv').config();
const nodemailer = require('nodemailer');


async function main() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.rambler.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'project-socks@rambler.ru',
      pass: "Project-Socks1",
    },
  });

  const info = await transporter.sendMail({
    from: 'project-socks@rambler.ru',
    to: 'ctpaep@yandex.ru',
    subject: 'По вопросам рекламы',
    html: `Привет Скай.`,
  });

  console.log('Message sent: %s', info.messageId);
}

const CartPageControler = async (req, res) => {
  const name = req.session?.user?.name;
  const id = req.session?.user_id;
  const user = req.session?.user;
  const userCart = await Cart.findAll({
    where: { user_id: id },
    raw: true,
  });
  render(CartViev, {user, userCart }, res);
};

const Order = async (req, res) => {
  console.log(req.body)
  //await main();
  res.sendStatus(200);
}

module.exports = {CartPageControler, Order};
