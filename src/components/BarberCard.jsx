import {useState} from 'react';
import {getServiceByName} from '../data/serviceData';
import ServicesModal from './ServicesModal';
import './BarberCard.css';

const BarberCard = ({ barber }) => {
    const [isOpen, setIsOpen] = useState(false);

    const availableServices = barber.services.map(getServiceByName).filter(Boolean);

    return (
        <article className="barber-card">
            <div className="barber-image-container">
                <img src={barber.image} alt={barber.name} />
            </div>
            <div className="barber-card__content">
                <p className="barber-card__role">{barber.role}</p>
                <h2>{barber.name}</h2>
                <p className="barber-card__description">{barber.description}</p>
                <div className="barber-card__footer">
                    <span>{availableServices.length} services available</span>
                    <button type="button" onClick={() => setIsOpen(true)}>
                        View services
                    </button>
                </div>
            </div>
            {isOpen && (
                <ServicesModal
                    barber={barber}
                    services={availableServices}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </article>
    );
}

export default BarberCard;