import React, { useEffect, useState, useRef } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/index.scss';
import image from '../images/undraw_startup_life_2du2.svg';
import angular from '../images/angular.svg';
import ionic from '../images/ionic.svg';
import laravel from '../images/laravel.svg';
import react from '../images/react.svg';
import nodejs from '../images/node-js.svg';
import vuejs from '../images/vuejs.svg';
import aws from '../images/aws.svg';

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
									menyediakan jasa pembuatan aplikasi berbasis <i>desktop</i>,{' '}
									<i>web</i> dan <i>mobile.</i>
								</p>
								<p>
									<a href="#" className="btn btn-primary px-4 py-3">
										Hubungi Kami
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="ftco-section services-section bg-light">
				<div className="container">
					<div className="row justify-content-center mb-3 pb-3">
						<div className="col-md-7 text-center heading-section">
							<h2 className="mb-4">Kelebihan Kami</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 d-flex align-self-stretch">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center order-md-last">
									<span className="flaticon-cloud"></span>
								</div>
								<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
									<h3 className="heading">Performa Web Cepat</h3>
									<p className="mb-0">
										Web yang cepat mempengaruhi SEO (Search Engine Optimization)
										dan kenyamanan pengguna.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="flaticon-server"></span>
								</div>
								<div className="media-body pl-4">
									<h3 className="heading">Aplikasi Cross Platform</h3>
									<p className="mb-0">
										Aplikasi cross platform untuk mempercepat proses development
										dan mengurangi biaya.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center order-md-last">
									<span className="flaticon-customer-service"></span>
								</div>
								<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
									<h3 className="heading">Harga Bersaing</h3>
									<p>Harga yang bersaing dengan jaminan kualitas terbaik.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="flaticon-life-insurance"></span>
								</div>
								<div className="media-body pl-4">
									<h3 className="heading">Dukungan Pemeliharan</h3>
									<p>
										Kami menyediakan jasa pemeliharan agar aplikasi Anda selalu
										dalam kondisi baik.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center order-md-last">
									<span className="flaticon-cloud-computing"></span>
								</div>
								<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
									<h3 className="heading">Teknologi Terbaru</h3>
									<p>
										Kami selalu menggunakan teknologi terbaru untuk tetap
										menjaga kualitas aplikasi yang kami buat.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="flaticon-settings"></span>
								</div>
								<div className="media-body pl-4">
									<h3 className="heading">Garansi Selamanya</h3>
									<p>
										Kami memberikan garansi selamanya pada aplikasi yang kami
										buat.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="ftco-section services-section bg-light">
				<div className="container">
					<div className="row justify-content-center mb-3 pb-3">
						<div className="col-md-7 text-center heading-section">
							<h2 className="mb-4">Teknologi Yang Kami Gunakan</h2>
						</div>
					</div>
					<div className="row technologies">
						<div className="col-sm">
							<img src={react} />
						</div>
						<div className="col-sm">
							<img src={angular} />
						</div>
						<div className="col-sm">
							<img src={vuejs} />
						</div>
						<div className="col-sm">
							<img src={laravel} />
						</div>
						<div className="col-sm">
							<img src={nodejs} />
						</div>
						<div className="col-sm">
							<img src={ionic} />
						</div>
						<div className="col-sm">
							<img src={aws} />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;
