import React from "react";

const List: React.FC<{ list: string[] }> = ({ list }) => {
	return (
		<div className="flex flex-col leading-7">
			{list.map((item) => {
				return <div>{item}</div>;
			})}
		</div>
	);
};

export default List;
