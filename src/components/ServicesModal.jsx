import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import BookingModal from './BookingModal';
import './ServicesModal.css';

const ServicesModal = ({barber, services, onClose}) => {
    const [bookingService, setBookingService] = useState(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        closeButtonRef.current?.focus();
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose]);

    return createPortal(
        (
        <div
            className="services-modal"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="services-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="services-modal-title">
                <button
                    ref={closeButtonRef}
                    className="services-modal__close"
                    type="button"
                    aria-label="Close services"
                    onClick={onClose}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="services-modal__header">
                    <p className="services-modal__eyebrow">Available with {barber.name}</p>
                    <h2 id="services-modal-title">Choose a service</h2>
                    <p>Select a service to book with {barber.name}.</p>
                </div>
                <div className="services-modal__list">
                    {services.map((service) => (
                        <article className="team-service" key={service.id}>
                            <img src={service.icon} alt="" loading="lazy" decoding="async" />
                            <div className="team-service__body">
                                <div className="team-service__title">
                                    <h3>{service.name}</h3>
                                    <strong>R {service.price}</strong>
                                </div>
                                <p>{service.description}</p>
                                <span>{service.duration} min</span>
                                <button type="button" onClick={() => setBookingService(service)}>
                                    Book this service
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {bookingService && (
                <BookingModal
                    service={bookingService}
                    barberName={barber.name}
                    onClose={() => setBookingService(null)}
                />
            )}
        </div>
        ),
        document.body
    );
};

export default ServicesModal;
