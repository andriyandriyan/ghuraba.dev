import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/index.scss';
import image from '../images/undraw_startup_life_2du2.svg';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="hero-wrap js-fullheight">
			<div className="overlay"></div>
			<div className="container-fluid px-0">
				<div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
					<img
						className="one-third js-fullheight align-self-end order-md-last img-fluid"
						src={image}
						alt=""
					/>
					<div className="one-forth d-flex align-items-center ftco-animate js-fullheight">
						<div className="text mt-5">
							<span className="subheading">Isometric Hosting</span>
							<h1 className="mb-3">
								<span>Design,</span> <span>Development,</span>{' '}
								<span>Hosting</span>
							</h1>
							<p>
								Far far away, behind the word mountains, far from the countries
								Vokalia and Consonantia, there live the blind texts.
							</p>
							<p>
								<a href="#" className="btn btn-primary px-4 py-3">
									Get in touch
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
);

export default IndexPage;
