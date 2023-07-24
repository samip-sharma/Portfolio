import { LegacyRef } from "react";
import { navWidth } from "../Constants";

interface ScreenProps {
	classNames?: string;
	children?: React.ReactNode;
	id?: string;
	reference?: LegacyRef<HTMLElement>;
}
const Screen: React.FC<ScreenProps> = ({
	classNames,
	children,
	id,
	reference,
}) => {
	return (
		<section
			id={id || ""}
			className={`box-border h-screen w-screen overflow-hidden pt-[68px] ${classNames}`}
			ref={reference}
		>
			{children}
		</section>
	);
};
export default Screen;
