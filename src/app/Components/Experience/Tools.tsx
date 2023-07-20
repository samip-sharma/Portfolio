import React, { FormEvent, useState } from "react";

const Tools: React.FC<{ tools: string[] }> = ({ tools }) => {
	return (
		<div className="flex flex-col">
			<h2>TOOLS</h2>
			<div className="flex flex-col">
				{tools.map((item) => {
					return <p>{item}</p>;
				})}
			</div>
		</div>
	);
};

export default Tools;
