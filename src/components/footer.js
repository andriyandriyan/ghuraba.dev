import React from 'react';

const Footer = () => (
	<footer className="ftco-footer ftco-bg-dark ftco-section">
		<div className="container">
			<div className="row mb-5">
				<div className="col-md">
					<div className="ftco-footer-widget mb-4 bg-primary p-4">
						<h2 className="ftco-heading-2">DEVGHURABA</h2>
						<p>
							Devghuraba Teknologi adalah IT Konsultan yang menyediakan jasa
							pembuatan aplikasi berbasis <i>web</i> dan <i>mobile.</i>
						</p>
						<ul className="ftco-footer-social list-unstyled mb-0">
							<li className="ftco-animate">
								<a href="#">
									<span className="icon-twitter"></span>
								</a>
							</li>
							<li className="ftco-animate">
								<a href="#">
									<span className="icon-facebook"></span>
								</a>
							</li>
							<li className="ftco-animate">
								<a href="#">
									<span className="icon-instagram"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md">
					<div className="ftco-footer-widget mb-4 ml-md-5">
						<h2 className="ftco-heading-2">Unseful Links</h2>
						<ul className="list-unstyled">
							<li>
								<a href="#" className="py-2 d-block">
									Servers
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									Windos Hosting
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									Cloud Hosting
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									OS Servers
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									Linux Servers
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md">
					<div className="ftco-footer-widget mb-4">
						<h2 className="ftco-heading-2">Navigational</h2>
						<ul className="list-unstyled">
							<li>
								<a href="#" className="py-2 d-block">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									Domain
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									Hosting
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									About
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="py-2 d-block">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md">
					<div className="ftco-footer-widget mb-4">
						<h2 className="ftco-heading-2">Kantor</h2>
						<div className="block-23 mb-3">
							<ul>
								<li>
									<span className="icon icon-map-marker"></span>
									<span className="text">
										Jl. H. Adjid Kel. Bojong Rawalumbu, Kec. Rawalumbu Kota Bekasi 17116
									</span>
								</li>
								<li>
									<a href="#">
										<span className="icon icon-phone"></span>
										<span className="text">+628988798320</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span className="icon icon-envelope"></span>
										<span className="text">
											<span
												className="__cf_email__"
												data-cfemail="1f767179705f66706a6d7b70727e7671317c7072"
											>
												devghuraba@gmail.com
											</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 text-center">
					Copyright © {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
					<p>
						Copyright &copy; All rights reserved | This template is made with{' '}
						<i className="icon-heart" aria-hidden="true"></i> by{' '}
						<a href="https://colorlib.com" target="_blank">
							Colorlib
						</a>
					</p>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
