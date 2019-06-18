const express = require("express")
const mailRouter = express.Router()
const nodemailer = require('nodemailer')
require("dotenv").config()


let transport = {
	service: "Gmail",
	host: "smtp.gmail.com",
	port: 465,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS
	},
	// debug: true, // show debug output
  // logger: true // log information in conso
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
	if (error) {
		console.log(error)
	} else {
		console.log('Server ready to take messages')
	}
})

mailRouter.route("/")

	.post((req, res) => {
		let data = req.body

		let mailOptions = {
				from: data.name,
				to: 'austin.r.morrill@gmail.com',
				subject: `Message from website, subject: "${data.subject}"`,
				text: `Name of sender: ${data.name} \nE-mail of sender: ${data.email} \nSubject: ${data.subject} \n${data.message}`
			}

		transporter.sendMail(mailOptions, (err, info) => {
			if(err) {
				return console.log(error)
			} else {
				return console.log(`Email sent : ${info.response}`)
			}					
	})
	res.send('sent')
	
})

module.exports = mailRouter