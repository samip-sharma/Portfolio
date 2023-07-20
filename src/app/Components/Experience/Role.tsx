import React, { FormEvent, useState } from "react";

const Role: React.FC<{ role: string }> = ({ role }) => {
	return (
		<div>
			<h1>Role</h1>
			{role}
		</div>
	);
};

export default Role;
