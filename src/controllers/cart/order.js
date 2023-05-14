

// const nodemailer = require('nodemailer')


// let transporter = nodemailer.createTransport({
//     host: 'smtp.rambler.ru',
//                 port: 465,
//                 secure: true, // true for 465, false for other ports
//                 auth: {
//                     user: 'project-socks@rambler.ru',
//                     pass: 'Project-Socks1'
//                 },
// })

// let result = await transporter.sendMail({
//   from: '"Node js" <nodejs@example.com>',
//   to: 'user@example.com, user@example.com',
//   subject: 'Message from Node js',
//   text: 'This message was sent from Node js server.',
//   html:
//     'This <i>message</i> was sent from <strong>Node js</strong> server.',
// })

// console.log(result)

// class MailService {
// 	constructor() {
// 		this.transporter = nodemailer.createTransport({
// 			host: 'smtp.rambler.ru',
// 			port: 465,
// 			secure: true,
// 			auth: {
// 				user: 'project-socks@rambler.ru',
//                 pass: 'Project-Socks1'
// 			},
// 		});
// 	}

// 	async sendActivationMail(to) {
// 		await this.transporter.sendMail({
// 			from: 'project-socks@rambler.ru',
// 			to,
// 			subject: `Account activation on ABC`,
// 			text: '',
// 			html:
//                 `
//                     <div>
//                         <h1>Please, use the following link to activate your account </h1>
                        
//                     </div>
//                 `,
// 		});
// 	}
// }
//  const test = new MailService()

//  test.sendActivationMail('ctpaep@mail.ru').then(console.log)

//module.exports = new MailService();

// const msg = {
//     from: 'project-socks@rambler.ru',
//     to: "ctpaep@mail.ru",
//     text: "gjfjgb",
// }

// function sendMail (message) {
//     this.message = message;
//     const transporter = nodemailer.createTransport(
//         {
//             host: 'smtp.rambler.ru',
//             port: 465,
//             secure: false, // true for 465, false for other ports
//             auth: {
//                 user: 'project-socks@rambler.ru',
//                 pass: 'Project-Socks1'
//             }
//         },
//     )
//     const send =  (mesage) => transporter.sendMail(mesage, (err, info) => {
//                 if(err) console.log(err);
//                 console.log('Email sent: ', info)
//             })
//             send(this.message)

// }

// sendMail(msg)
// // const mailer = message => {
// //     transporter.sendMail(message, (err, info) => {
// //         if(err) return console.log(err)
// //         console.log('Email sent: ', info)
// //     })
// // }

// // function  mailer (message) {
// //     transporter.sendMail(message, (err, info) => {
// //         if(err) return console.log(err)
// //         console.log('Email sent: ', info)
// //     })
// // }

// // mailer(message)


// module.exports = mailer