import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import BookingForm from './BookingForm';
import './BookingModal.css';

const BookingModal = ({service, barberName, onClose}) => {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
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
        <div className="booking-modal" role="presentation" onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
                onClose();
            }
        }}>
            <div className="booking-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
                <button className="booking-modal__close" type="button" aria-label="Close booking form" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <h1 id="booking-modal-title" className="sr-only">Book an appointment</h1>
                <BookingForm initialService={service} barberName={barberName} />
            </div>
        </div>
        ),
        document.body
    );
};

export default BookingModal;
