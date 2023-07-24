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
			<div className="my-4 flex flex-row gap-7">
				<h4 className="font-bold">{company}</h4>
				<p>{date}</p>
			</div>
			<div className="mt-5 flex flex-row justify-around">
				<div className="basis-1/2">{description}</div>
				<div className="flex basis-1/2 flex-row  justify-around">
					<div className="flex flex-col">
						<div className="">
							<Role role={role} />
						</div>
						<div className="my-5">
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
