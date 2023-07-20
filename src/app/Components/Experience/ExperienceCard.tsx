import React, { FormEvent, useState } from "react";
import Role from "./Role";
import Responsibilities from "./Responsibilities";
import Tools from "./Tools";

interface ExperienceProps {
	company: string;
	role: string;
	date: string;
	description: string;
	responsibilities: string[];
	tools: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({
	company,
	role,
	date,
	description,
	responsibilities,
	tools,
}) => {
	return (
		<div>
			<div>
				<h4>{company}</h4>
				<p>{date}</p>
			</div>
			<div className="flex flex-row">
				<div className="basis-1/2">{description}</div>
				<div className="flex flex-row">
					<div className="flex flex-col">
						<div className="basis-1/2">
							<Role role={role} />
						</div>
						<div className="basis-1/2">
							<Responsibilities list={responsibilities} />
						</div>
					</div>
					<Tools tools={tools} />
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
