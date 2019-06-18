import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Header = ({ siteTitle }) => {
	const { placeholderImage } = useStaticQuery(
		graphql`
			query {
				placeholderImage: file(relativePath: { eq: "logo.png" }) {
					childImageSharp {
						fluid(maxWidth: 400) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`
	);

	let timeOut = 0;
	const baseNavbarClass =
		'navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light';
	const [navbarClass, setNavbarClass] = useState('');

	useEffect(() => {
		window.onscroll = () => {
			const st = document.documentElement.scrollTop;
			let navClass;
			if (st > 150) {
				navClass = 'sleep scrolled awake';
			} else if (st < 150) {
				navClass = 'sleep scrolled ';
				if (st > 30) {
					navClass = 'sleep awake';
				} else if (st < 30) {
					navClass = 'sleep';
				}
			}

			clearTimeout(timeOut);
			timeOut = setTimeout(() => {
				setNavbarClass(navClass);
				console.log(navClass);
			}, 200);
		};
	}, []);

	return (
		<nav className={`${baseNavbarClass} ${navbarClass}`} id="ftco-navbar">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<Img
						alt={siteTitle}
						title={siteTitle}
						fluid={placeholderImage.childImageSharp.fluid}
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#ftco-nav"
					aria-controls="ftco-nav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="oi oi-menu"></span> Menu
				</button>

				<div className="collapse navbar-collapse" id="ftco-nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link activeClassName="active" className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link activeClassName="active" className="nav-link" to="#">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link activeClassName="active" className="nav-link" to="#">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link activeClassName="active" className="nav-link" to="#">
								Contact
							</Link>
						</li>
						<li className="nav-item cta">
							<Link className="nav-link" to="#">
								<span>Get started</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
