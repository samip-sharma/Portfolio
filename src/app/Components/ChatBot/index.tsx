import React from "react";
import ChatComponent, { ChatMessage } from "./ChatComponent";

const ChatBot: React.FC = () => {
	const [messages, setMessages] = React.useState<ChatMessage[]>([]);
	const [isLoading, setIsLoading] = React.useState(false);

	const handleUserMessage = async (message: string) => {
		const newMessage: ChatMessage[] = [
			...messages,
			{
				id: messages.length,
				text: message,
				isUserMessage: true,
			},
		];
		setMessages(newMessage);

		try {
			const { result } = await callGpt(message);
			const responseMessage: ChatMessage = {
				id: messages.length + 1,
				text: result.content,
				isUserMessage: false,
			};
			setMessages([...newMessage, responseMessage]);
		} catch {
			const responseMessage: ChatMessage = {
				id: messages.length + 1,
				text: `Oh, wonderful! It seems that the battery in the Neuralink chip installed on the real Samip Sharma's brain is currently charging. Can you please try that again?`,
				isUserMessage: false,
			};
			setMessages([...newMessage, responseMessage]);
		}
	};

	const callGpt = async (message: string) => {
		const response = await fetch("/api/chatbot", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message }),
		});
		setIsLoading(false);
		return response.json();
	};

	return (
		<ChatComponent
			messages={messages}
			onUserMessage={handleUserMessage}
			isLoading={isLoading}
		/>
	);
};

export default ChatBot;
