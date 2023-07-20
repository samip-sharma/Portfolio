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
	const messageClass = clsx("align-text-left rounded-lg p-2 m-2 max-w-xs", {
		"bg-[rgba(255,70,38,0.8)] text-white": !message.isUserMessage,
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
		<div className="flex h-[60%] flex-col rounded-3xl bg-[rgb(234,212,194)] ">
			<div className="h-[70%] flex-1  overflow-auto p-4">
				{messages.map((message) => (
					<ChatMessage key={message.id} message={message} />
				))}
				{isLoading && (
					<div className="ml-auto">
						<TypingIndicator />
					</div>
				)}
			</div>
			<form
				onSubmit={handleUserMessageSubmit}
				className="relative h-20 items-center  justify-center p-4"
			>
				<input
					type="text"
					placeholder="Type your message..."
					value={userMessage}
					onChange={handleUserMessageChange}
					className="hover:border-outline-[rgba(255,70,38,0.8)] w-full rounded-md py-2 pl-2 pr-5 hover:border-2"
				/>
				<i className="fa-regular fa fa-paper-plane  absolute right-7 top-7 text-[rgba(255,70,38,0.8)]"></i>
			</form>
		</div>
	);
};

export default ChatComponent;
