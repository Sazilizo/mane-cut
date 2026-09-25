import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import './services.css';
import BookingModal from '../components/BookingModal';
import ServiceCard from '../components/ServiceCard';
import {serviceCatalog} from '../data/serviceData';
import teamMemberImage from '../assets/Teams Photos/Team Member 1.jpg';

const Home = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className="home-page">
            <section className="home-intro">
                <div className="home-intro__copy">
                    <p className="home-eyebrow">Mane Cut · Est. for the everyday</p>
                    <h1>A proper cut<br />changes the day.</h1>
                    <p>Good conversation, sharp tools, and a chair you can settle into. Book a considered cut, shave, or beard service at Mane Cut.</p>
                    <div className="home-actions">
                        <Link className="home-action" to="/bookings">Book your chair</Link>
                        <Link className="home-action home-action--quiet" to="/team">Meet the barbers</Link>
                    </div>
                </div>
                <div className="home-intro__feature">
                    <img src={teamMemberImage} alt="Mane Cut barber holding professional shears" />
                    <p>Walk in for the atmosphere. Leave with a cut that still looks right three weeks from now.</p>
                </div>
            </section>
            <section className="home-services" aria-labelledby="home-services-title">
                <div className="home-services__inner">
                    <div className="home-section-heading">
                        <h2 id="home-services-title">The chair menu</h2>
                        <p>Classic barbering, kept simple. Pick one service or combine up to three when you need the full reset.</p>
                    </div>
                    <div className="services-list">
                    {serviceCatalog.slice(0, 3).map((service) => (
                        <ServiceCard key={service.id} service={service} onBook={setSelectedService} />
                    ))}
                    </div>
                </div>
            </section>
            <section className="home-proof">
                <h2>Come for the cut.<br />Stay for the ritual.</h2>
                <div>
                    <p>Mane Cut is a neighbourhood barbershop built around the small things: a clean neck line, a hot towel, a playlist that does not shout, and enough time to get the details right.</p>
                    <div className="home-proof__details">
                        <span><strong>45 min</strong>Average appointment</span>
                        <span><strong>3</strong>Services per booking</span>
                        <span><strong>5</strong>Ways to leave sharper</span>
                        <span><strong>1</strong>Good reason to come back</span>
                    </div>
                </div>
            </section>
            {selectedService && <BookingModal service={selectedService} onClose={() => setSelectedService(null)} />}
        </div>
    );
}

export default Home;