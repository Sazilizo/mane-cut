import haircutImage from '../assets/hair-cut.jpg';
import shaveImage from '../assets/shaving.jpg';
import beardTrimImage from '../assets/mustache-trim.jpg';
import hairColoringImage from '../assets/hair-dye.jpg';
import stylingImage from '../assets/hair-styling.jpg';

import TeamMember1Image from '../assets/Teams Photos/Team Member 1.jpg';
import TeamMember2Image from '../assets/Teams Photos/Team Member.jpg';
import TeamMember3Image from '../assets/Teams Photos/Team Member 2.jpg';

export const serviceCatalog = [
    {
        id: 'haircut',
        name: 'Haircut',
        icon: haircutImage,
        description: 'Professional haircut services for men and women.',
        price: 50,
        duration: 45
    },
    {
        id: 'shave',
        name: 'Shave',
        icon: shaveImage,
        description: 'Traditional straight razor shave for a smooth finish.',
        price: 25,
        duration: 30
    },
    {
        id: 'beard-trim',
        name: 'Beard Trim',
        icon: beardTrimImage,
        description: 'Keep your beard looking sharp and well-groomed.',
        price: 20,
        duration: 20
    },
    {
        id: 'hair-coloring',
        name: 'Hair Coloring',
        icon: hairColoringImage,
        description: 'Add some color to your hair with our professional coloring service.',
        price: 40,
        duration: 90
    },
    {
        id: 'styling',
        name: 'Styling',
        icon: stylingImage,
        description: 'Get the perfect style for any occasion.',
        price: 50,
        duration: 45
    }
];

const serviceAliases = {
    Coloring: 'hair-coloring',
    'Hot Towel Treatment': 'shave'
};

export const getServiceByName = (name) => {
    const serviceId = serviceAliases[name] || name.toLowerCase().replaceAll(' ', '-');
    return serviceCatalog.find((service) => service.id === serviceId);
};

export const teamMembers = [
    {
        name: 'John Doe',
        role: 'Barber',
        image: TeamMember1Image,
        description: 'John is an experienced barber with over 10 years in the industry.',
        services: ['Haircut', 'Shave', 'Beard Trim']
    },
    {
        name: 'Adrian Smith',
        role: 'Barber',
        image: TeamMember2Image,
        description: 'Adrian specializes in modern hairstyles and is known for his precision cuts.',
        services: ['Haircut', 'Coloring', 'Styling']
    },
    {
        name: 'Mike Johnson',
        role: 'Barber',
        image: TeamMember3Image,
        description: 'Mike has a passion for classic barbering techniques and provides a great customer experience.',
        services: ['Haircut', 'Shave', 'Beard Trim', 'Hot Towel Treatment']
    }
];
