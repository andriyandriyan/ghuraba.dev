import React, { useEffect, useState, useRef } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/index.scss';
import image from '../images/undraw_startup_life_2du2.svg';

const IndexPage = () => {
	const timeOut = useRef();
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [fadeInAnimate, setFadeInAnimate] = useState('');

	useEffect(() => {
		window.onresize = () => {
			clearTimeout(timeOut.current);
			timeOut.current = setTimeout(() => {
				setWindowHeight(window.innerHeight);
			}, 200);
		};

		setTimeout(() => {
			setFadeInAnimate('fadeInUp ftco-animated');
		}, 250);

		window.onscroll = () => {
			const ftco_animate = document.getElementsByClassName('ftco-animate');
			Object.keys(ftco_animate).map((val) => {
				console.log(val);
			});
		};
	}, []);

	return (
		<Layout>
			<SEO title="Jasa Pembuatan Web &amp; Mobile App" />
			<div className="hero-wrap js-fullheight" style={{ height: windowHeight }}>
				<div className="overlay" />
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
									Devghuraba Teknologi adalah <i>Software Developer</i> yang
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
			<section className="ftco-section services-section bg-light">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-3">
						<div className="col-md-7 text-center heading-section ftco-animate">
							<h2 className="mb-4">Kelebihan Kami</h2>
							<p>
								Even the all-powerful Pointing has no control about the blind
								texts it is an almost unorthographic.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 d-flex align-self-stretch ftco-animate">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center order-md-last">
									<span className="flaticon-cloud"></span>
								</div>
								<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
									<h3 className="heading">Super Fast Server</h3>
									<p className="mb-0">
										Even the all-powerful Pointing has no control about the
										blind texts it is an almost unorthographic.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch ftco-animate">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="flaticon-server"></span>
								</div>
								<div className="media-body pl-4">
									<h3 className="heading">Daily Backups</h3>
									<p className="mb-0">
										Even the all-powerful Pointing has no control about the
										blind texts it is an almost unorthographic.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch ftco-animate">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center order-md-last">
									<span className="flaticon-customer-service"></span>
								</div>
								<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
									<h3 className="heading">Technical Services</h3>
									<p>
										Even the all-powerful Pointing has no control about the
										blind texts it is an almost unorthographic.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch ftco-animate">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="flaticon-life-insurance"></span>
								</div>
								<div className="media-body pl-4">
									<h3 className="heading">Secure and Reliable</h3>
									<p>
										Even the all-powerful Pointing has no control about the
										blind texts it is an almost unorthographic.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch ftco-animate">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center order-md-last">
									<span className="flaticon-cloud-computing"></span>
								</div>
								<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
									<h3 className="heading">DNS Control</h3>
									<p>
										Even the all-powerful Pointing has no control about the
										blind texts it is an almost unorthographic.
									</p>
								</div>
								s
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch ftco-animate">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="flaticon-settings"></span>
								</div>
								<div className="media-body pl-4">
									<h3 className="heading">24/7 Support</h3>
									<p>
										Even the all-powerful Pointing has no control about the
										blind texts it is an almost unorthographic.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;
