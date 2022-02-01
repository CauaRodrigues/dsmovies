import GithubIcon from "assets/images/GithubIcon";
import "./style.css";

const Navbar = () => {
	return (
		<header>
			<nav className="container">
				<div className="dsmovie-nav-content">
					<h1>DSMovie</h1>
					<a
						href="https://github.com/CauaRodrigues"
						target="_blank"
						rel="noreferrer"
					>
						<div className="dsmovie-contact-container">
							<GithubIcon />
							<p className="dsmovie-contact-link">/CauaRodrigues</p>
						</div>
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
