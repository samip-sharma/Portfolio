"use client";

interface NavItemProps {
	name: string;
	src: string;
	onClick: React.MouseEventHandler<HTMLAnchorElement>;
}
const NavItem: React.FC<NavItemProps> = ({ name, src, onClick }) => {
	return (
		<a
			onClick={onClick}
			href={`#${src}`}
			className="cursor-pointer font-raleway text-sm font-bold dark:text-white"
		>
			{name}
		</a>
	);
};
export default NavItem;
