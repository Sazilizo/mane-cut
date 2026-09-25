import './ServiceCard.css';

const ServiceCard = ({service, onBook}) => (
    <article className="service-card">
        <img src={service.icon} alt={service.name} />
        <div className="service-card__content">
            <div className="service-card__heading">
                <h2>{service.name}</h2>
                <span className="service-card__price">R {service.price}</span>
            </div>
            <p>{service.description}</p>
            <span className="service-card__meta">{service.duration} minutes in the chair</span>
            <button type="button" onClick={() => onBook(service)}>
                Book this service
            </button>
        </div>
    </article>
);

export default ServiceCard;
