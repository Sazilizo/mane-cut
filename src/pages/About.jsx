import './About.css';
import barberChair from '../assets/Heavy_Duty_Vintage_Reclining_Barber_Chair.png';

const About = () => {
    return (
        <main className="about-page">
            <section className="about-page__hero">
                <div>
                    <p className="about-page__eyebrow">About Mane Cut</p>
                    <h1>A barbershop<br />with standards.</h1>
                    <p>We believe a good haircut should feel like a reset: unhurried, personal, and finished with care.</p>
                </div>
                <div className="about-page__image">
                    <img src={barberChair} alt="Vintage barber chair at Mane Cut" loading="lazy" decoding="async" />
                    <span>The chair is waiting</span>
                </div>
            </section>
            <section className="about-page__story">
                <h2>Good work is<br />in the details.</h2>
                <div className="about-page__story-copy">
                    <p>Mane Cut was made for people who still care about the ritual of getting a cut. The welcome, the consultation, the first clean line, and the mirror at the end all matter.</p>
                    <p>Our barbers work across classic cuts, modern styling, shaves, and beard care. We listen first, then use the tools and techniques that suit your hair, your face, and how you actually live.</p>
                    <p>No rush, no mystery pricing, no trying to turn every appointment into something it is not. Just a good chair and a better finish.</p>
                </div>
            </section>
            <section className="about-page__values">
                <article className="about-value">
                    <h3>Take your time</h3>
                    <p>We leave room for a proper consultation and the small adjustments that make a cut feel like yours.</p>
                </article>
                <article className="about-value">
                    <h3>Keep it honest</h3>
                    <p>Clear services, clear prices, and advice that is useful beyond the barbershop mirror.</p>
                </article>
                <article className="about-value">
                    <h3>Leave sharper</h3>
                    <p>The goal is simple: a finish that feels good today and still behaves when you style it at home.</p>
                </article>
            </section>
        </main>
    );
}

export default About;