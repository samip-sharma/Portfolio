import React from "react";

const Responsibilities: React.FC<{ list: string[] }> = ({ list }) => {
	return (
		<div className="flex flex-col">
			<h2>RESPONSIBILITIESs</h2>
			<div className="flex flex-col">
				{list.map((item) => {
					return <div>{item}</div>;
				})}
			</div>
		</div>
	);
};

export default Responsibilities;
