import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/index.scss';
import image from '../images/undraw_startup_life_2du2.svg';

const IndexPage = () => {
	let timeOut = 0;
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [fadeInAnimate, setFadeInAnimate] = useState('');

	useEffect(() => {
		window.onresize = () => {
			clearTimeout(timeOut);
			timeOut = setTimeout(() => {
				setWindowHeight(window.innerHeight);
			}, 200);
		};

		setTimeout(() => {
			setFadeInAnimate('fadeInUp ftco-animated');
		}, 250);
	}, []);

	return (
		<Layout>
			<SEO title="Home" />
			<div className="hero-wrap js-fullheight" style={{ height: windowHeight }}>
				<div className="overlay"></div>
				<div className="container-fluid px-0">
					<div
						className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end"
						style={{ height: windowHeight }}
					>
						<img
							className="one-third js-fullheight align-self-end order-md-last img-fluid"
							src={image}
							style={{ height: windowHeight }}
						/>
						<div
							className={`one-forth d-flex align-items-center ftco-animate js-fullheight ${fadeInAnimate}`}
						>
							<div className="text mt-5">
								<h1 className="mb-3">
									<span>Web &</span> <span>Mobile Development</span>
								</h1>
								<p>
									Devghuraba Teknologi adalah IT Konsultan yang
									menyediakan jasa pembuatan aplikasi berbasis <i>web</i> dan{' '}
									<i>mobile.</i>
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
		</Layout>
	);
};

export default IndexPage;
