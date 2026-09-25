import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router';
import './Header.css';
import barberChair from "../assets/Heavy_Duty_Vintage_Reclining_Barber_Chair.png";
import trimmerMark from '../assets/trimmer.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="top-bar">
                <div className="logo--container">
                    <img className="logo-mark" src={trimmerMark} alt="" loading="lazy" decoding="async" />
                    <h1 className="logo">Mane Cut</h1>
                </div>
                {screenWidth >= 768 && (
                    <div className="navigation--container">
                        <Navigation className="navigation" />
                    </div>
                )}
            </div>
            {screenWidth < 768 && (
                <button
                    className="menu-toggle"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </button>
            )}
            {screenWidth < 768 && (
                <div className={`mobile-navigation ${isOpen ? 'is-open' : ''}`}>
                    <Navigation className="mobile-navigation__links" onNavigate={() => setIsOpen(false)} />
                </div>
            )}
            <div className="header-cta">
                <div className="header-image-container">
                    <img src={barberChair} alt="Barbershop" loading="lazy" decoding="async" />
                </div>
                <div className="header-text">
                    <p className="header-eyebrow">Mane Cut Barbershop</p>
                    <h2>Look sharp.<br />Feel ready.</h2>
                    <p>Your one-stop destination for considered cuts, classic shaves, and modern grooming.</p>
                    <div className="header-actions">
                        <Link className="header-cta-button" to="/bookings">Schedule a visit</Link>
                        <Link className="header-cta-button header-cta-button--light" to="/about">About us</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
export const Navigation = ({className, onNavigate}) => {
    const location = useLocation();
    const activePath = location.pathname;

    return (
        <nav className={`${className || ''}`}>
            <ul>
                <li className={activePath === '/' ? 'active' : ''}>
                    <Link to="/" onClick={onNavigate}>Home</Link>
                </li>
                <li className={activePath === '/about' ? 'active' : ''}>
                    <Link to="/about" onClick={onNavigate}>About</Link>
                </li>
                <li className={activePath === '/services' ? 'active' : ''}>
                    <Link to="/services" onClick={onNavigate}>Services</Link>
                </li>
                <li className={activePath === '/team' ? 'active' : ''}>
                    <Link to="/team" onClick={onNavigate}>Team</Link>
                </li>
            </ul>
            <Link to="/bookings" className={activePath === '/bookings' ? 'active' : ''} onClick={onNavigate}>
                Bookings
            </Link>
        </nav>
    );
};

export default Header;