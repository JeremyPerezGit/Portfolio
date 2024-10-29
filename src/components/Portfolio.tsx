import "../styles/portfolio.css";
import datas from "../datas.json";

function Portfolio() {
	return (
		<div className="portfolio">
			<h2 id="portfolio">Portfolio</h2>
			<div className="projects">
				<section id="project1">
					<h3>{datas[4].name}</h3>
					<p>My first team project</p>
					<a href={datas[4].url} target="_blank" rel="noreferrer">
						Visit now
					</a>
				</section>
				<section id="solorush1">
					<h3>{datas[5].name}</h3>
					<p>My first solo project</p>
					<a href={datas[5].url} target="_blank" rel="noreferrer">
						Visit now
					</a>
				</section>
			</div>
		</div>
	);
}

export default Portfolio;
