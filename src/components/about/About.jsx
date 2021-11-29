import React from "react";
import "./about.css";
import Award from "../../img/award.png";
import ME from "../../img/horse.jpg";

function About() {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img src={ME} alt="" className="a-img" />
					{/* add an image */}
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1>
				<p className="a-sub">
					Graduate from Kingsland University's Full Stack developer
					program in october 2021
				</p>
				<p className="a-desc">
					My name is Dustin Ibrao and I develop websites using React.
					I am new to the industry, originally having a fitness
					background, but have been loving every minute of it. When I
					am not coding, I can be found spending time with my dogs.
				</p>
				<div className="a-award">
					{/* <img src={Award} alt="" className="a-award-img" /> */}
					<div className="a-award-texts">
						{/* <h4 className="a-award-title">
							International Design Awards 2021
						</h4> */}
						{/* <p className="a-award-desc">
							Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur autodit and fugit.
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}
export default About;
