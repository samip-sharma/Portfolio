interface NavItemProps {
	name: string;
	src: string;
}
const NavItem: React.FC<NavItemProps> = ({ name, src }) => {
	return <a className="cursor-pointer font-raleway dark:text-white">{name}</a>;
};
export default NavItem;
