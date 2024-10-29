import "../styles/contact.css";
import datas from "../datas.json";

function Contact() {
	return (
		<>
			<h2 id="contactMe">Contact me</h2>
			<section className="contact">
				<a href={datas[6].contact} id="email">
					<img src="src\assets\icons\email.png" alt="email" className="icons" />
					<p>{datas[6].contact}</p>
				</a>

				<a href={datas[7].github} target="_blank" rel="noreferrer" id="github">
					<img
						src="src\assets\icons\github.png"
						alt="github"
						className="icons"
					/>
					<p>{datas[7].github}</p>
				</a>
			</section>
		</>
	);
}

export default Contact;
