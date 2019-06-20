import React, { useState } from "react"
import axios from 'axios'
import './Contact.css'


const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const [submit, setSubmit] = useState('Submit')

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmit("...sending")
				let data = {
					name: name,
					email: email,
					subject: subject,
					message: message
				}
		axios.post('/mail', data).then(res => {
			setTimeout(resetForm(), 500)
		})
		.catch(() => {
			console.log('Message not sent');
		})
	}

	const resetForm = () => {
		setName('')
		setMessage('')
		setEmail('')
		setSubject('')
		setSubmit('Message sent!')

	}

	return (
		<div className='contact__container' id='contact'>
			<h1>Contact us!</h1>
			<h2>
				Planning a special event?
			</h2>
			<h2>
				Bringing a big group and need lots of space? 
			</h2>
			<h2>
				Anything we can do to improve your visit? 
			</h2>
			<h2>
				Message or call us ahead and let us know! We'd love to have you and your friends!
			</h2>
			<form className='contact-form' onSubmit={handleSubmit}>
				<input
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Full name'
					type='text'
					name='name'
					minLength='4'
					required
				/>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='E-mail'
					type='email'
					name='email'
					minLength='5'
					required
				/>
				<input
					value={subject}
					onChange={e => setSubject(e.target.value)}
					placeholder='Subject'
					type='text'
					name='subject'
					minLength='3'
					required
				/>
				<textarea
					value={message}
					onChange={e => setMessage(e.target.value)}
					placeholder='Please enter your message...'
					rows='5'
					cols='50'
					name='message'
					type='text'
					minLength='3'
					maxLength='500'
					required
				/>
				<input type='submit' value={submit} />
			</form>
		</div>
	)
}

export default Contact;

