import {Link} from 'react-router-dom';
import './Footer.css';

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const Footer = () => (
    <footer className="site-footer">
        <div className="site-footer__inner">
            <div className="site-footer__brand">
                <Link
                    className="site-footer__logo"
                    to="/"
                    onClick={scrollToTop}
                >
                    Mane Cut
                </Link>
                <p>Good cuts, good conversation, and a chair worth settling into.</p>
            </div>
            <nav className="site-footer__nav" aria-label="Footer navigation">
                <Link to="/about" onClick={scrollToTop}>About</Link>
                <Link to="/services" onClick={scrollToTop}>Services</Link>
                <Link to="/team" onClick={scrollToTop}>Our team</Link>
                <Link to="/bookings" onClick={scrollToTop}>Book a visit</Link>
            </nav>
            <div className="site-footer__contact">
                <p>Open Tuesday to Saturday</p>
                <p>09:00 - 18:00</p>
                <p>14 Long Street, Cape Town</p>
                <a href="tel:+27215550148">+27 21 555 0148</a>
                <a href="mailto:lizosazi@gmail.com">lizosazi@gmail.com</a>
            </div>
        </div>
        <div className="site-footer__bottom">
            <span>&copy; {new Date().getFullYear()} Mane Cut</span>
            <div className="site-footer__socials">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Mane Cut on Facebook" title="Facebook">
                    <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                </a>
            </div>
            <Link to="/terms" onClick={scrollToTop}>Terms and Conditions</Link>
        </div>
    </footer>
);

export default Footer;
