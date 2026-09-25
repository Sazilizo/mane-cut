import BookingForm from '../components/BookingForm';
import './Bookings.css';

const Bookings = () => {
    return (
        <main className="bookings-page">
            <div className="bookings-page__layout">
                <div className="bookings-page__intro">
                    <p className="bookings-page__eyebrow">Reserve your chair</p>
                    <h1>Make time<br />for yourself.</h1>
                    <p>Choose one service or combine up to three. Add the finished appointment straight to your calendar.</p>
                    <div className="bookings-page__details">
                        <div><strong>Tuesday - Saturday</strong><span>09:00 - 18:00</span></div>
                        <div><strong>Find us</strong><span>14 Long Street, Cape Town</span></div>
                        <div><strong>Questions?</strong><span>lizosazi@gmail.com</span></div>
                    </div>
                </div>
                <BookingForm />
            </div>
        </main>
    );
}

export default Bookings;