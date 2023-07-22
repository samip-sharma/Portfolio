import React, { FormEvent, useState } from "react";
import * as emailjs from "@emailjs/browser";
import Screen from "./Screen";

interface FormProps {
	name?: string;
	email?: string;
	message?: string;
}
const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [messageSent, setMessageSent] = useState(false);
	const [errors, setErrors] = useState<FormProps>({});

	const validateForm = () => {
		const newErrors: FormProps = {};

		// Validate name
		if (!name) {
			newErrors.name = "Name is required";
		}

		// Validate email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) {
			newErrors.email = "Email is required";
		} else if (!emailRegex.test(email)) {
			newErrors.email = "Invalid email format";
		}

		// Validate message
		if (!message) {
			newErrors.message = "Message is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const isValid = validateForm();

		if (isValid) {
			emailjs.send(
				"samipsharma",
				"template_AQGUQzAd",
				{
					from_name: name,
					to_name: "Samip",
					from_email: email,
					message_html: message,
				},
				process.env.NEXT_PUBLIC_EMAILJS_KEY,
			);

			setMessageSent(true);
		}
	};

	return (
		<Screen
			id="contactme"
			classNames="flex flex-col items-center justify-center"
		>
			<div className="text-center text-3xl font-bold">GET IN TOUCH</div>
			<form
				onSubmit={handleSubmit}
				className="flex w-[30%] min-w-[450px]  flex-col justify-center text-center"
			>
				{messageSent ? (
					<div>Message has been sent!</div>
				) : (
					<>
						<div>
							<label className="hidden" htmlFor="name">
								Name:
							</label>
							<input
								type="text"
								id="name"
								className="h-13 w-full border-b-2 border-l-0 border-r-0 border-t-0	border-black p-6 font-raleway focus:outline-none"
								value={name}
								placeholder="Name"
								onChange={(e) => setName(e.target.value)}
							/>
							{errors.name && <span>{errors.name}</span>}
						</div>

						<div>
							<label className="hidden" htmlFor="email">
								Email:
							</label>
							<input
								type="email"
								className="h-13 w-full border-b-2 border-l-0 border-r-0 border-t-0	border-black p-6 font-raleway focus:outline-none"
								id="email"
								value={email}
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							{errors.email && <span>{errors.email}</span>}
						</div>

						<div>
							<label className="hidden" htmlFor="message">
								Message:
							</label>
							<textarea
								id="message"
								value={message}
								className="h-20 w-full border-b-2 border-l-0 border-r-0	border-t-0 border-black p-6 font-raleway focus:outline-none"
								placeholder="Message"
								onChange={(e) => setMessage(e.target.value)}
							/>
							{errors.message && <span>{errors.message}</span>}
						</div>

						<div>
							<button
								className="m-5 h-11 w-24 bg-black font-light text-white"
								type="submit"
							>
								SEND
							</button>
							<button
								className="m-5 h-11 w-24 bg-black font-light text-white"
								type="reset"
							>
								RESET
							</button>
						</div>
					</>
				)}
			</form>
		</Screen>
	);
};

export default ContactForm;
