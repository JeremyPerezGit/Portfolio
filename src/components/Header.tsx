import "../styles/header.css";
import datas from "../datas.json";

function Header() {
	return (
		<div id="header">
			<figure>
				<section id="parallax">
					<img src={datas[3].img} alt="avatar" id="avatar" />
				</section>
			</figure>
			<h1>Jeremy Perez</h1>
			<nav id="nav">
				<a href="#aboutMe">About me</a>
				<a href="#portfolio">Portfolio</a>
				<a href="#contactMe">Contact</a>
			</nav>
		</div>
	);
}

export default Header;
