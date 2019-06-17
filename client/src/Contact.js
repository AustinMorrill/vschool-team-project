import React, { useState } from "react"
import axios from 'axios'


const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const [submit, setSubmit] = useState('Submit')
	const [sent, setSent] = useState(false)

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
			setSent(true)
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
		<div className='contact__container'>
			<form className='contact-form' onSubmit={handleSubmit}>
				<input 
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Full name'
				type='text'
				name='name'
				required
				/>
				<input
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='E-mail'
				type='email'
				name='email'
				required
				/>
				<input
				value={subject}
				onChange={e => setSubject(e.target.value)}
				placeholder='Subject'
				type='text'
				name='subject'
				required
				/>
				<textarea
				value={message}
				onChange={e => setMessage(e.target.value)}
				placeholder="Please enter your message..."
				rows="5"
				cols="50"
				name='message'
				type='text'
				required
				/>
				<input type='submit' value={submit}/>
			</form>
		</div>
	);
}

export default Contact;

