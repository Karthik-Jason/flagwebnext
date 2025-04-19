import Link from "next/link";
import './page.css';

import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook';
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram';
import {FaYoutube} from '@react-icons/all-files/fa/FaYoutube';


export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
            <footer className='flag-footer' id="contact-us">
			<div className="col-12 col-sm-12 col-md-4 col-lg-4 py-5 px-3">
				<div className="church-timings">
					<h2 className="section-head">Church Timings</h2><br/>
                    <strong className='ms-3 fs-5'>Sunday Worship Services:</strong>
					<table className='service-timings'>
						<tbody>
							<tr>
								<td><em>Preparation prayer:</em></td>
								<td className='ps-14'>5:30 AM - 5:55 AM</td>
							</tr>
							<tr>
								<td><em>1st Service:</em></td>
								<td className='ps-14'>6:00 AM - 7:45 AM</td>
							</tr>
							<tr>
								<td><em>2nd Service:</em></td>
								<td className='ps-14'>8:30 AM - 10:15 AM</td>
							</tr>
							<tr>
								<td><em>3rd Service:</em></td>
								<td className='ps-14'>11:00 AM - 12:45 PM</td>
							</tr>
							<tr>
								<td><em>Evening Service:</em></td>
								<td className='ps-14'>06:30 PM - 07:30 PM</td>
							</tr>
							<tr>
								<td><em>Leaders Meeting:</em></td>
								<td className='ps-14'>07:30 PM - 08:30 PM</td>
							</tr>
						</tbody>
					</table><br/>
					<strong className='ms-3 fs-5'>Sunday Bible Class for Children:</strong>
					<table className='sunday-class-timings'>
						<tbody>
							<tr>
								<td><em>1st Service:</em></td>
								<td className='ps-2'>6:00 AM - 7:45 AM</td>
							</tr>
							<tr>
								<td><em>2nd Service:</em></td>
								<td className='ps-2'>8:30 AM - 10:15 AM</td>
							</tr>
							<tr>
								<td><em>3rd Service:</em></td>
								<td className='ps-2'>11:00 AM - 12:45 PM</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
            <div className="social-container">
                <a className="social fb" href="https://www.facebook.com/FullLifeCentre"><FaFacebook size={40}/></a>
                <a className="social insta" href="https://www.instagram.com/flag_chennai/"><FaInstagram size={40}/></a>
                <a className="social yt" href="https://www.youtube.com/c/FullLifeAGChurch"><FaYoutube size={40}/></a>
            </div>
			<div className="google-map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.1564788732467!2d80.11847071187096!3d13.07830042977078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526160197a69bd%3A0xb12ec237458879ba!2sFull%20Life%20Centre%20A.%20G.%20Church!5e0!3m2!1sen!2sin!4v1642231341199!5m2!1sen!2sin"
					title='Full Life Church Location'
					style={{ border: 0 }}
					allowFullScreen={true}
					loading="lazy"
				></iframe>
			</div>
			<div className="address">
				<div className="church-address">
					<h3 className="section-head">Church Address:</h3>
					<p className='ps-3'>
						Full Life Centre A.G Church, <br />
						No.1, 1st Cross Street,<br />
						Murugan Nagar,<br />
						Thiruverkadu,<br />
						Chennai - 600 077.<br />
					</p>
				</div><br/>
				<div className="prayer-requests">
					<h3 className="section-head">For Prayer Needs</h3>
					<p className='ms-3'>
						<strong className=''>Call us at:</strong>
						<u><a className='pr-link ms-2' href="tel:+919841677587">+91 9841677587</a></u>
						<br />
						<strong className=''>Email us at:</strong>
						<u><a className='pr-link ms-2' href="mailto:fulllifecentre@gmail.com">fulllifecentre@gmail.com</a></u>
					</p>
				</div><br/>
				{/* <div className="quick-links">
					<h3 className="section-head">Quick Links</h3>
					<ul className='ms-3'>
						<li><Link className='linktag white' href="/aboutus">About Us</Link></li>
						<li><Link className='linktag white' href="/about/pastoral-team">Pastoral Team</Link></li>
						<li><Link className='linktag white' href="/about/churchhistory">Our Church History</Link></li>
					</ul>
				</div> */}
			</div>
            <div className="copyright">
                <p>Copyright © {currentYear} all rights reserved</p>
            </div>
        </footer>
    );
  }