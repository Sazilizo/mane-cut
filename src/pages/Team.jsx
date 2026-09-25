import BarberCard from '../components/BarberCard';
import {teamMembers} from '../data/serviceData';
import './Team.css';

const Team = () => {
  


  return (
    <main className="team-page">
        <div className="team-page__intro">
            <p className="team-page__eyebrow">The hands behind the craft</p>
            <h1>Meet our team</h1>
            <p>Choose a barber and explore their available services. Your appointment can combine up to three services.</p>
        </div>
        <div className="team-members">
            {teamMembers.map((member) => (
                <BarberCard key={member.name} barber={member} />
            ))} 
        </div>
    </main>
  )
}

export default Team