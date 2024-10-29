import "../styles/aboutMe.css";
import datas from "../datas.json";

function AboutMe() {
	return (
		<section className="about">
			<h2 id="aboutMe">About Me</h2>
			<p>
				Hello, I'm {datas[0].firstname} {datas[0].lastname}, I'm a{" "}
				{datas[2].age} fullstack web developer.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo officia
				adipisci vitae cumque a optio ipsum fuga voluptate aut. Unde mollitia
				debitis nobis dolores architecto voluptas iure cum nisi repellendus
				temporibus libero officiis ducimus illo, autem, cupiditate at itaque
				officia reiciendis? Ducimus possimus natus facilis at maxime repudiandae
				animi?
			</p>
		</section>
	);
}

export default AboutMe;
