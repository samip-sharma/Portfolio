import React from "react";
import List from "./List";
import SubHeading from "./SubHeading";

const Responsibilities: React.FC<{ list: string[] }> = ({ list }) => {
	return (
		<div className="flex flex-col">
			<SubHeading heading="RESPONSIBILITIES" />
			<List list={list}></List>
		</div>
	);
};

export default Responsibilities;
