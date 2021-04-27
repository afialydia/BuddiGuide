import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";

import "../../page/home.styles.css";
import "../../page/favorites.styles.css";

const About = () => {
	const [modal, setModal] = useState(false);

	const close = () => setModal(!modal);

	return (
		<>
			<Modal
				isOpen={modal}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered={false}
				backdrop
				fade
				autoFocus
				toggle={close}
				className="faq-modal"
				contentClassName="faq-content"
			>
				<ModalBody>
					<span
						className="faq-click"
						onClick={() => {
							close();
						}}
					>
						<h5>{"close"}</h5>
					</span>
					<div>
						<h5 style={{ color: "rgb(98, 46, 71, 0.8)" }}>
							{"Hey there, I'm BuddiGuide — "}
						</h5>
						<p>
							{
								"A web app designed to provide medical marijuana consumers with a resource to research and track their strain preference."
							}
						</p>
						<p>
							{
								"Don't think of me as a doctor. I'm more, a friend who knows enough about marijuana strains to describe their idiosyncratic differences. Some could say I'm a strain sommelier. Or dang the joke was right there - think of me as a Buddi Guide."
							}
						</p>
						<h5 style={{ color: "rgb(98, 46, 71, 0.8)" }}>
							{"BuddiGuide's Mission:"}
						</h5>
						<p>
							<b>
								{
									"To empower consumers to make informed selections when choosing marijuana strains."
								}
							</b>{" "}
							{
								"With over 2000 strains in our database, app users can find their faves by searching through marijuana strains by strain name, strain type, flavor, and/or intended effect."
							}
						</p>
						<p>
							<b>{"To streamline the process of going to the dispensary."}</b>
							{
								" When consumers know what they want and can filter through options beforehand, making a dispensary trip can be a lot less daunting."
							}
						</p>
						<p>
							<b>{"To keep the good vibes flowing."}</b>{" "}
							{
								"Not all strains work well for all people. With BuddiGuide, registered app users can save marijuana strains to their profile, rate them based on their preference, and document their experiences. Never forget a strain that you love. Never regret knowing what doesn't work."
							}
						</p>
					</div>
					<span>
						{"Developed w/ love by"}
						<a
							href="https://afiacaruso.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="afia"
						>
							<b> {"Afia Caruso"}</b>
						</a>
					</span>
				</ModalBody>
			</Modal>
			<span
				className="faq-click"
				onClick={() => {
					close();
				}}
			>
				<h5>{"About"}</h5>
			</span>
		</>
	);
};

export default About;
