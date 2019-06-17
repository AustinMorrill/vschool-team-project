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
	}
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

	.post((req, response) => {
		let data = req.body

		let mailOptions = {
				from: data.name,
				to: 'austin.r.morrill@gmail.com',
				subject: `Message from website, subject: "${data.subject}"`,
				text: `Name of sender: ${data.name} \n E-mail of sender: ${data.email} \n Subject: ${data.subject} \n ${data.message}`
			}

		transporter.sendMail(mailOptions, (err, response) => {
			if(err) {
				response.send(err)
			} else {
				response.send('success')
			}			
	})
	response.send('message sent')
})

module.exports = mailRouter