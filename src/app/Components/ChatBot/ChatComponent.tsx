import React from "react";
import clsx from "clsx";
import TypingIndicator from "./TypingIndicator";

export interface ChatMessage {
	id: number;
	text: string;
	isUserMessage: boolean;
}

interface ChatComponentProps {
	messages: ChatMessage[];
	onUserMessage: (message: string) => void;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ChatMessageProps {
	message: ChatMessage;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
	const messageClass = clsx("rounded-lg p-2 m-2 max-w-xs", {
		"bg-blue-500 text-white": !message.isUserMessage,
		"bg-gray-200": message.isUserMessage,
		"self-end": !message.isUserMessage,
		"self-start": message.isUserMessage,
	});

	return <div className={messageClass}>{message.text}</div>;
};

const ChatComponent: React.FC<ChatComponentProps> = ({
	messages,
	onUserMessage,
	isLoading,
	setIsLoading,
}) => {
	const [userMessage, setUserMessage] = React.useState("");

	const handleUserMessageChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setUserMessage(event.target.value);
	};

	const handleUserMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (userMessage.trim() !== "") {
			setIsLoading(true);
			onUserMessage(userMessage);
			setUserMessage("");
		}
	};

	return (
		<div className="flex h-full flex-col">
			<div className="p-4">
				{messages.map((message) => (
					<ChatMessage key={message.id} message={message} />
				))}
				{isLoading && (
					<div className="ml-auto">
						<TypingIndicator />
					</div>
				)}
			</div>
			<form onSubmit={handleUserMessageSubmit} className="bg-gray-100 p-4">
				<input
					type="text"
					placeholder="Type your message..."
					value={userMessage}
					onChange={handleUserMessageChange}
					className="w-full rounded-md p-2"
				/>
				<button
					type="submit"
					className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white"
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default ChatComponent;
