"use client";

interface NavItemProps {
	name: string;
	src: string;
}
const NavItem: React.FC<NavItemProps> = ({ name, src }) => {
	const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
		const url = new window.URL(e.currentTarget.href);

		document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<a
			onClick={handleLinkClick}
			href={`#${src}`}
			className="cursor-pointer font-raleway dark:text-white"
		>
			{name}
		</a>
	);
};
export default NavItem;
