import React, { useState, useRef } from "react";
import clsx from "clsx";
import TypingIndicator from "./TypingIndicator";

export interface ChatMessage {
	id: number;
	text: string;
	isUserMessage: boolean;
}

interface ChatComponentProps {
	messages: ChatMessage[];
	onUserMessage: (message: string) => Promise<void>;
	isLoading: boolean;
}

interface ChatMessageProps {
	message: ChatMessage;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
	return (
		<div
			className={clsx("m-2 max-w-[75%] rounded-lg p-2 text-left", {
				"self-start bg-gray-200": !message.isUserMessage,
				"self-end bg-[rgba(255,70,38,0.8)] text-white": message.isUserMessage,
			})}
		>
			{message.text}
		</div>
	);
};

const ChatComponent: React.FC<ChatComponentProps> = ({
	messages,
	onUserMessage,
	isLoading,
}) => {
	const [userMessage, setUserMessage] = React.useState("");
	const chatListRef = useRef<HTMLDivElement>(null);

	const handleUserMessageChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setUserMessage(event.target.value);
	};

	const handleUserMessageSubmit = async (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();

		await onUserMessage(userMessage);

		setUserMessage("");
	};

	return (
		<div className="flex h-[60%] w-[32rem] flex-col rounded-lg bg-[rgb(234,212,194)] dark:bg-[rgb(27,29,33)]">
			<div
				ref={chatListRef}
				className="flex h-[70%] flex-1 flex-col overflow-auto p-4"
			>
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
					className="peer/message w-full rounded-md border-2 border-solid border-gray-300 py-2 pl-2 pr-5 opacity-70 outline-none hover:opacity-100 focus:border-[rgba(255,70,38,0.8)]"
				/>
				<button className="absolute right-7 top-7 text-gray-300 peer-focus/message:text-[rgba(255,70,38,0.8)]">
					<i
						className={clsx(
							"fa fa-paper-plane",
							userMessage.trim() ? "fa-solid" : "fa-regular",
						)}
					/>
				</button>
			</form>
		</div>
	);
};

export default ChatComponent;
