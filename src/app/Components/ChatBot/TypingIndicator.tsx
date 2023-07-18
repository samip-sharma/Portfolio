import React from "react";

interface TypingIndicatorProps {
	delay?: number;
	className?: string;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({
	delay = 500,
	className,
}) => {
	const [isVisible, setIsVisible] = React.useState(true);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setIsVisible(!isVisible);
		}, delay);

		return () => clearTimeout(timeout);
	}, [delay, isVisible]);

	return (
		<div className={`flex items-center ${className}`}>
			{isVisible && (
				<div className="mr-1 h-2 w-2 animate-bounce rounded-full bg-gray-500" />
			)}
			{isVisible && (
				<div className="mr-1 h-2 w-2 animate-bounce rounded-full bg-gray-500" />
			)}
			{isVisible && (
				<div className="h-2 w-2 animate-bounce rounded-full bg-gray-500" />
			)}
		</div>
	);
};

export default TypingIndicator;
