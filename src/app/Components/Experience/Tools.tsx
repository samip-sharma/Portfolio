import React from "react";
import List from "./List";
import SubHeading from "./SubHeading";

const Tools: React.FC<{ tools: string[] }> = ({ tools }) => {
	return (
		<div className="flex flex-col">
			<SubHeading heading="TOOLS" />
			<List list={tools}></List>
		</div>
	);
};

export default Tools;
