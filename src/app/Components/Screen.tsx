import { navWidth } from "../Constants";
interface ScreenProps {
	classNames?: string;
	children?: React.ReactNode;
	id?: string;
}
const Screen: React.FC<ScreenProps> = ({ classNames, children, id }) => {
	return (
		<section
			id={id || ""}
			className={`box-border h-screen w-screen overflow-hidden pt-[68px] ${classNames}`}
		>
			{children}
		</section>
	);
};
export default Screen;
