import React from "react";

export default class MyInfoLinks extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="links-container">
					<div>
						<a href="https://docs.google.com/document/d/1Sw1LeeR0J6Dn_KASVuJ0Sj5lJFUkHF1WbymxLdcktJQ/edit?usp=sharing">
							<i className="fa fa-file"></i>My Resume
						</a>
					</div>
					<div>
						<a href="https://www.linkedin.com/in/samip-sharma/">
							<i className="fa fa-linkedin"></i>Linkedin
						</a>
					</div>
					<div>
						<a href="https://medium.com/@samip.sharma963">
							<i className="fa fa-medium"></i>Blogs
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
