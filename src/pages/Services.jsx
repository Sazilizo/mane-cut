import {useState} from 'react';
import './Services.css';
import BookingModal from '../components/BookingModal';
import ServiceCard from '../components/ServiceCard';
import {serviceCatalog} from '../data/serviceData';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <main className="services-page">
            <div className="services-page__intro">
                <div>
                    <p className="services-page__eyebrow">The chair menu</p>
                    <h1>Services built<br />around you.</h1>
                </div>
                <div>
                    <p>Nothing overcomplicated. Just proper barbering, clear prices, and enough time in the chair to get it right.</p>
                    <p>Choose one service or combine up to three in a single appointment.</p>
                </div>
            </div>
            <div className="services-list">
                {serviceCatalog.map((service) => (
                    <ServiceCard key={service.id} service={service} onBook={setSelectedService} />
                ))}
            </div>
            {selectedService && <BookingModal service={selectedService} onClose={() => setSelectedService(null)} />}
            <p className="services-page__note">Every service includes a consultation before we start. Not sure what to book? Choose the closest fit and we will sort the details together.</p>
        </main>
    );
}

export default Services;