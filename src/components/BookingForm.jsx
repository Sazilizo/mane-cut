import {useState} from 'react';
import {serviceCatalog, getServiceByName} from '../data/serviceData';
import './BookingForm.css';

const today = new Date().toISOString().split('T')[0];

const formatMoney = (amount) => `R ${amount}`;

const formatCalendarDate = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

const buildCalendarDetails = ({booking, selectedServices, barberName}) => {
    const start = new Date(`${booking.date}T${booking.time}`);
    const duration = selectedServices.reduce((total, service) => total + service.duration, 0);
    const end = new Date(start.getTime() + duration * 60 * 1000);
    const serviceNames = selectedServices.map((service) => service.name).join(' + ');

    return {
        title: `Mane Cut: ${serviceNames}${barberName ? ` with ${barberName}` : ''}`,
        start,
        end,
        serviceNames,
        details: `Customer: ${booking.name}\nPhone: ${booking.phone}\nEmail: ${booking.email}\nBarber: ${barberName || 'Mane Cut team'}\nServices: ${serviceNames}\nTotal: ${formatMoney(booking.total)}`
    };
};

const createGoogleCalendarUrl = (calendarDetails) => {
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: calendarDetails.title,
        dates: `${formatCalendarDate(calendarDetails.start)}/${formatCalendarDate(calendarDetails.end)}`,
        details: calendarDetails.details,
        location: 'Mane Cut'
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const downloadIcsFile = (calendarDetails) => {
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Mane Cut//Booking//EN',
        'BEGIN:VEVENT',
        `UID:${Date.now()}@mane-cut`,
        `DTSTAMP:${formatCalendarDate(new Date())}`,
        `DTSTART:${formatCalendarDate(calendarDetails.start)}`,
        `DTEND:${formatCalendarDate(calendarDetails.end)}`,
        `SUMMARY:${calendarDetails.title}`,
        `DESCRIPTION:${calendarDetails.details.replaceAll('\n', '\\n')}`,
        'LOCATION:Mane Cut',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');
    const blob = new Blob([icsContent], {type: 'text/calendar;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'mane-cut-booking.ics';
    link.click();
    URL.revokeObjectURL(url);
};

const BookingForm = ({initialService, barberName}) => {
    const initialServiceId = typeof initialService === 'string'
        ? getServiceByName(initialService)?.id
        : initialService?.id;
    const [selectedServiceIds, setSelectedServiceIds] = useState(initialServiceId ? [initialServiceId] : []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: ''
    });
    const [booking, setBooking] = useState(null);

    const selectedServices = serviceCatalog.filter((service) => selectedServiceIds.includes(service.id));
    const total = selectedServices.reduce((sum, service) => sum + service.price, 0);

    const updateField = (event) => {
        const {name, value} = event.target;
        setFormData((current) => ({...current, [name]: value}));
    };

    const toggleService = (serviceId) => {
        setSelectedServiceIds((current) => {
            if (current.includes(serviceId)) {
                return current.filter((id) => id !== serviceId);
            }
            return current.length < 3 ? [...current, serviceId] : current;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooking({...formData, total});
    };

    if (booking) {
        const calendarDetails = buildCalendarDetails({booking, selectedServices, barberName});

        return (
            <section className="booking-confirmation" aria-live="polite">
                <p className="booking-eyebrow">Booking ready</p>
                <h2>{calendarDetails.serviceNames}</h2>
                <p>{booking.date} at {booking.time} for {booking.name}</p>
                {barberName && <p>Barber: {barberName}</p>}
                <p className="booking-total">Total: {formatMoney(booking.total)}</p>
                <div className="calendar-actions">
                    <a className="booking-button" href={createGoogleCalendarUrl(calendarDetails)} target="_blank" rel="noreferrer">
                        Add to Google Calendar
                    </a>
                    <button className="booking-button booking-button--secondary" type="button" onClick={() => downloadIcsFile(calendarDetails)}>
                        Download for Apple Calendar
                    </button>
                </div>
                <button className="booking-reset" type="button" onClick={() => setBooking(null)}>
                    Edit booking
                </button>
            </section>
        );
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-heading">
                <p className="booking-eyebrow">Reserve your chair</p>
                <h2>{barberName ? `Book with ${barberName}` : 'Book an appointment'}</h2>
                <p>Choose one service or combine up to three. Your total updates as you build your appointment.</p>
            </div>
            <fieldset>
                <legend>Choose up to three services</legend>
                <div className="service-options">
                    {serviceCatalog.map((service) => (
                        <label className={`service-option ${selectedServiceIds.includes(service.id) ? 'is-selected' : ''}`} key={service.id}>
                            <input
                                type="checkbox"
                                checked={selectedServiceIds.includes(service.id)}
                                onChange={() => toggleService(service.id)}
                                disabled={!selectedServiceIds.includes(service.id) && selectedServiceIds.length === 3}
                            />
                            <span>
                                <strong>{service.name}</strong>
                                <small>{service.duration} min</small>
                            </span>
                            <b>{formatMoney(service.price)}</b>
                        </label>
                    ))}
                </div>
            </fieldset>
            <div className="booking-summary">
                <span>{selectedServices.length} service{selectedServices.length === 1 ? '' : 's'} selected</span>
                <strong>{formatMoney(total)}</strong>
            </div>
            <div className="booking-fields">
                <label>Name<input name="name" type="text" value={formData.name} onChange={updateField} required /></label>
                <label>Email<input name="email" type="email" value={formData.email} onChange={updateField} required /></label>
                <label>Phone<input name="phone" type="tel" value={formData.phone} onChange={updateField} required /></label>
                <label>Date<input name="date" type="date" min={today} value={formData.date} onChange={updateField} required /></label>
                <label>Time<input name="time" type="time" value={formData.time} onChange={updateField} required /></label>
            </div>
            <button className="booking-button" type="submit" disabled={!selectedServices.length}>
                Continue to calendar
            </button>
        </form>
    );
};

export default BookingForm;
