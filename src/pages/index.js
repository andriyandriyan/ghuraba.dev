import React, { useEffect, useState, useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

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
import firebase from '../images/firebase.svg';
import gatsby from '../images/gatsby.svg';
import web_dev from '../images/undraw_web_developer_p3e5.svg';
import mobile_dev from '../images/undraw_Mobile_application_mr4r.svg';

const technologies = [
	angular,
	ionic,
	laravel,
	react,
	nodejs,
	vuejs,
	aws,
	firebase,
	gatsby,
];

export const portofolioImage = graphql`
	fragment portofolioImage on File {
		childImageSharp {
			fluid(maxWidth: 400) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;

export const images = graphql`
	query {
		adminEmonev: file(relativePath: { eq: "portofolio/admin-emonev.png" }) {
			...portofolioImage
		}
		adminOnlineShop: file(
			relativePath: { eq: "portofolio/admin-online-shop.png" }
		) {
			...portofolioImage
		}
		adminDalops: file(relativePath: { eq: "portofolio/admin-dalops.png" }) {
			...portofolioImage
		}
		webOnlineShop: file(
			relativePath: { eq: "portofolio/web-online-shop.png" }
		) {
			...portofolioImage
		}
		dalopsApp: file(relativePath: { eq: "portofolio/dalops-app.png" }) {
			...portofolioImage
		}
		ppobApp: file(relativePath: { eq: "portofolio/ppob-app.png" }) {
			...portofolioImage
		}
		onlineShopApp: file(
			relativePath: { eq: "portofolio/online-shop-app.png" }
		) {
			...portofolioImage
		}
	}
`;

const IndexPage = ({ data: images }) => {
	const timeOut = useRef();
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [fadeInAnimate, setFadeInAnimate] = useState('');
	const [filter, setFilter] = useState('All');

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
							alt="Software Developer"
						/>
						<div
							className={`one-forth d-flex align-items-center ftco-animate js-fullheight ${fadeInAnimate}`}
						>
							<div className="text mt-5 pb-5">
								<h1 className="mb-3">
									<span>Web &</span> <span>Mobile Development</span>
								</h1>
								<p>
									Devghuraba Teknologi adalah <i>Software Developer</i> yang
									menyediakan jasa pembuatan aplikasi berbasis <i>desktop</i>,{' '}
									<i>web</i> dan <i>mobile.</i>
								</p>
								<p>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://wa.me/628988798320"
										className="btn btn-primary px-4 py-3"
									>
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
							<h2 className="mb-4">Layanan Utama Kami</h2>
						</div>
					</div>
					<div className="row main-service">
						<div className="col-md-3 py-3">
							<img src={web_dev} width="100%" alt="Web Development" />
						</div>
						<div className="col-md-9 py-3">
							<div className="mt-3">
								<h3>Web Development</h3>
								<p>
									Kami menyediakan jasa pembuatan website menggunakan teknologi
									terbaru dengan performa yang cepat. Beberapa contoh yang kami
									buat yaitu Online Shop, Company Profile, Booking App, dan
									E-Monev.
								</p>
							</div>
						</div>
						<div className="col-md-9 py-3 text-right">
							<div className="mt-3">
								<h3>Mobile App Development</h3>
								<p>
									Kami dapat membangun aplikasi mobile untuk Android dan iOS
									dengan desain dan performa terbaik. Beberapa contoh yang kami
									buat yaitu Online Shop, PPOB, Blog dan Monitoring System.
								</p>
							</div>
						</div>
						<div className="col-md-3 py-3">
							<img src={mobile_dev} width="100%" alt="Mobile App Development" />
						</div>
					</div>
				</div>
			</section>
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
									<span className="flaticon-speedometer"></span>
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
									<span className="flaticon-smartphone"></span>
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
									<span className="flaticon-coin"></span>
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
									<span className="flaticon-repair"></span>
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
									<span className="flaticon-innovation"></span>
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
									<span className="flaticon-guarantee"></span>
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
						<div className="col-md-6 d-flex align-self-stretch">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center order-md-last">
									<span className="flaticon-responsive"></span>
								</div>
								<div className="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
									<h3 className="heading">Mobile Responsive</h3>
									<p>
										Tampilan web yang menyesuaikan dengan ukuran layar pengguna
										untuk kenyamanan pengguna.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-self-stretch">
							<div className="media block-6 services d-flex align-items-center">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="flaticon-web"></span>
								</div>
								<div className="media-body pl-4">
									<h3 className="heading">Single Page Application</h3>
									<p>
										Aplikasi web yang hanya memiliki satu halaman, tidak perlu
										memuat semua halaman, hanya perlu memuat bagian yang
										diperlukan.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="ftco-section services-section bg-light">
				<div className="container">
					<div className="row justify-content-center mb-3">
						<div className="col-md-7 text-center heading-section">
							<h2 className="mb-4">Portofolio Kami</h2>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-12">
							<button onClick={() => setFilter('All')} className={`btn-filter ${filter === 'All' ? 'active' : ''}`}>Semua</button>
							<button onClick={() => setFilter('Web')} className={`btn-filter ${filter === 'Web' ? 'active' : ''}`}>Website</button>
							<button onClick={() => setFilter('Mobile')} className={`btn-filter ${filter === 'Mobile' ? 'active' : ''}`}>Mobile App</button>
						</div>
					</div>
					<div className="row portfolio">
						{Object.keys(images).map(key => (
							<div className="col-md-3 mb-3" key={key}>
								<Img fluid={images[key].childImageSharp.fluid} />
							</div>
						))}
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
						{technologies.map((tech, i) => (
							<div className="col-sm" key={i}>
								<img src={tech} alt={tech} />
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;
