import React from "react";

const SubHeading: React.FC<{ heading: string }> = ({ heading }) => {
	return <h2 className="mb-3 font-bold">{heading}</h2>;
};

export default SubHeading;
