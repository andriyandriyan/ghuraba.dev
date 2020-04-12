import React from 'react';
import mapPin from '../images/map-pin.svg';
import whatsapp from '../images/whatsapp.svg';
import mail from '../images/mail.svg';

const Footer = () => (
	<footer className="ftco-footer ftco-bg-dark ftco-section">
		<div className="container">
			<div className="row mb-5">
				<div className="col-md">
					<div className="ftco-footer-widget mb-4 bg-primary p-4">
						<h2 className="ftco-heading-2">DEVGHURABA</h2>
						<p>
							Devghuraba Teknologi adalah <i>Software Developer</i> yang
							menyediakan jasa pembuatan aplikasi berbasis <i>web</i> dan{' '}
							<i>mobile.</i>
						</p>
					</div>
				</div>
				<div className="col-md">
					<div className="ftco-footer-widget mb-4 ml-md-5">
						<h2 className="ftco-heading-2">Layanan Kami</h2>
						<ul className="list-unstyled">
							<li>Mobile Apps Development</li>
							<li>Web Development</li>
						</ul>
					</div>
				</div>
				<div className="col-md">
					<div className="ftco-footer-widget mb-4">
						<h2 className="ftco-heading-2">Kantor</h2>
						<div className="block-23 mb-3">
							<ul>
								<li>
									<span className="icon">
										<img src={mapPin} alt="map-marker" />
									</span>
									<span className="text">
										Jl. H. Adjid Kel. Bojong Rawalumbu, Kec. Rawalumbu Kota
										Bekasi 17116
									</span>
								</li>
								<li>
									<a target="_blank" rel="noopener noreferrer" href="https://wa.me/628988798320">
										<span className="icon">
											<img src={whatsapp} alt="phone" />
										</span>
										<span className="text">+628988798320</span>
									</a>
								</li>
								<li>
									<a target="_blank" rel="noopener noreferrer" href="mailto:devghuraba@gmail.com">
										<span className="icon">
											<img src={mail} alt="mail" />
										</span>
										<span className="text">
											<span>
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
					<p>
						Copyright © {new Date().getFullYear()} All rights reserved
					</p>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
