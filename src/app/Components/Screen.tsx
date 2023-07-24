import { LegacyRef } from "react";
import { navWidth } from "../Constants";

interface ScreenProps {
	classNames?: string;
	children?: React.ReactNode;
	id?: string;
	ref?: React.RefObject<HTMLDivElement>;
}
const Screen: React.FC<ScreenProps> = ({ classNames, children, id, ref }) => {
	return (
		<section
			id={id || ""}
			className={`box-border h-screen w-screen overflow-hidden pt-[68px] ${classNames}`}
			ref={ref}
		>
			{children}
		</section>
	);
};
export default Screen;
