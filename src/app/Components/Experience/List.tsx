import React from "react";

const List: React.FC<{ list: string[] }> = ({ list }) => {
	return (
		<div className="flex flex-col leading-7">
			{list.map((item, i) => {
				return <div key={`list-${i}`}>{item}</div>;
			})}
		</div>
	);
};

export default List;
