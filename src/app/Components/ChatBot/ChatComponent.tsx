import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import TypingIndicator from "./TypingIndicator";

export interface ChatMessage {
	id: number;
	text: string;
	isUserMessage: boolean;
}

const prompts: ChatMessage[] = [
	{
		id: 1,
		text: "Tell me about yourself",
		isUserMessage: true,
	},
	{
		id: 2,
		text: "What programming languages are you proficient in?",
		isUserMessage: true,
	},
	{
		id: 3,
		text: "Have you worked on any large-scale projects in the past?",
		isUserMessage: true,
	},
	{
		id: 4,
		text: "Tell me about your experience with version control systems like Git.",
		isUserMessage: true,
	},
	{
		id: 7,
		text: "What kind of software development projects are you most passionate about?",
		isUserMessage: true,
	},
	{
		id: 8,
		text: "How do you stay updated with the latest trends and advancements in software development?",
		isUserMessage: true,
	},
];

interface ChatComponentProps {
	messages: ChatMessage[];
	onUserMessage: (message: string) => Promise<void>;
	isLoading: boolean;
}

interface ChatMessageProps {
	message: ChatMessage;
	className?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, className }) => {
	return (
		<div
			className={clsx("mb-3 max-w-[75%] rounded-lg p-2 text-left", className, {
				"self-start bg-gray-200 dark:bg-gray-600 dark:text-white":
					!message.isUserMessage,
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
	const [dynamicClassName, setDynamicClassName] = useState(
		"translate-x-[1000px]",
	);

	useEffect(() => {
		setDynamicClassName("translate-x-0");
	}, []);

	const handleUserMessageChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setUserMessage(event.target.value);
	};

	const handleUserMessageSubmit = async (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();
		setUserMessage("");
		await onUserMessage(userMessage);
	};

	useEffect(() => {
		if (!chatListRef.current) return;

		chatListRef.current.scrollTo(0, chatListRef.current.scrollHeight);
	}, [messages]);

	return (
		<div
			className={clsx(
				"flex h-[60%] w-[32rem] flex-col rounded-lg bg-[rgb(234,212,194)] p-3 transition-all duration-700 dark:bg-[rgb(27,29,33)]  max-sm:w-screen",
				dynamicClassName,
			)}
		>
			<div ref={chatListRef} className="flex flex-1 flex-col overflow-auto">
				{!userMessage.length &&
					!messages.length &&
					prompts.map((message) => (
						<ChatMessage
							key={message.id}
							message={message}
							className="bg-gray-700 italic opacity-30"
						/>
					))}
				{messages.map((message) => (
					<ChatMessage key={message.id} message={message} />
				))}
				{isLoading && (
					<div className="ml-auto">
						<TypingIndicator />
					</div>
				)}
			</div>

			<form onSubmit={handleUserMessageSubmit} className="relative">
				<input
					type="text"
					placeholder="Ask me anything..."
					value={userMessage}
					onChange={handleUserMessageChange}
					className="peer/message w-full rounded-md border-2 border-solid border-gray-300 py-2 pl-2 pr-5 opacity-70 outline-none hover:opacity-100 focus:border-[rgba(255,70,38,0.8)]"
				/>
				<button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 peer-focus/message:text-[rgba(255,70,38,0.8)]">
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
