import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router';


const Navigation = () => {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    return (
        <nav className="navigation">
            <ul>
                <li className={activePath === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                </li>
                <li className={activePath === '/about' ? 'active' : ''}>
                    <Link to="/about">About</Link>
                </li>
                <li className={activePath === '/services' ? 'active' : ''}>
                    <Link to="/services">Services</Link>
                </li>
                <li className={activePath === '/team' ? 'active' : ''}>
                    <Link to="/team">Team</Link>
                </li>
                <li className={activePath === '/bookings' ? 'active' : ''}>
                    <Link to="/bookings">Bookings</Link>
                </li>
            </ul>
            <Link to="/bookings" className={activePath === '/bookings' ? 'active' : ''}>
                Bookings
            </Link>
        </nav>
    );
};

export default Navigation;