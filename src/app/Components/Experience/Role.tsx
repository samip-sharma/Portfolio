import React from "react";
import SubHeading from "./SubHeading";

const Role: React.FC<{ role: string }> = ({ role }) => {
	return (
		<div>
			<SubHeading heading="ROLE" />
			{role}
		</div>
	);
};

export default Role;
