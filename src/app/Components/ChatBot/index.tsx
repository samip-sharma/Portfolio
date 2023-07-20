import React from "react";
import ChatComponent, { ChatMessage } from "./ChatComponent";

const ChatBot: React.FC = () => {
	const [messages, setMessages] = React.useState<ChatMessage[]>([]);
	const [isLoading, setIsLoading] = React.useState(false);

	const handleUserMessage = (message: string) => {
		const newMessage: ChatMessage[] = [
			...messages,
			{
				id: messages.length,
				text: message,
				isUserMessage: true,
			},
		];
		setMessages(newMessage);

		callGpt(message)
			.then(({ result }) => {
				const responseMessage: ChatMessage = {
					id: messages.length + 1,
					text: result.content,
					isUserMessage: false,
				};
				setMessages([...newMessage, responseMessage]);
			})
			.catch(() => {
				const responseMessage: ChatMessage = {
					id: messages.length + 1,
					text: `Oh, wonderful! It seems that the battery in the Neuralink chip installed on the real Samip Sharma's brain is currently charging. Can you please try that again?`,
					isUserMessage: false,
				};
				setMessages([...newMessage, responseMessage]);
			});
	};

	const callGpt = async (message: string) => {
		if (!process.env.NEXT_PUBLIC_CHATBOT_API)
			console.error("NEXT_PUBLIC_CHATBOT_API not present");
		const response = await fetch(
			process.env.NEXT_PUBLIC_CHATBOT_API || "http://localhost:3000/",
			{
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			},
		);
		setIsLoading(false);
		return response.json();
	};

	return (
		<ChatComponent
			messages={messages}
			onUserMessage={handleUserMessage}
			isLoading={isLoading}
			setIsLoading={setIsLoading}
		/>
	);
};

export default ChatBot;
