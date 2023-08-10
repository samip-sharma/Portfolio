import React from "react";

const HamBurgerMenu: React.FC<{ handleHamburgerClick: () => void }> = ({
	handleHamburgerClick,
}) => {
	return (
		<div
			className="center hamburger relative z-50 mr-3  flex flex-col justify-center sm:hidden"
			onClick={handleHamburgerClick}
		>
			{[1, 2, 3].map((i) => (
				<div
					key={`line-${i}`}
					className="m-0.5 h-1 w-[1.9rem] bg-gray-600 dark:bg-slate-50"
				/>
			))}
		</div>
	);
};

export default HamBurgerMenu;
