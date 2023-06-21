import React from 'react';

interface Freelancer {
  id: number;
  names: string;
  about: string;
  location: string;
  category: string;
  technologies: string[];
  image: string;
}

interface FreelancerListProps {
  freelancers: Freelancer[];
}

const FreelancerList: React.FC<FreelancerListProps> = ({ freelancers }) => {
  return (
    <div>
      <h2>Freelancer List</h2>
      <ul>
        {freelancers.map((freelancer) => (
          <li key={freelancer.id}>
            <p>Name: {freelancer.names}</p>
            <p>About: {freelancer.about}</p>
            <p>Location: {freelancer.location}</p>
            <p>Category: {freelancer.category}</p>
            <p>Technologies: {freelancer.technologies.join(', ')}</p>
            <img src={freelancer.image} alt={freelancer.names} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerList;
