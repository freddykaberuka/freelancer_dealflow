import React, {useState} from 'react';

interface Freelancer {
  id: number;
  names: string;
  about: string;
  location: string;
  category: string;
  technologies: string[];
  image: string;
  years_experience: string;
}

interface FreelancerListProps {
  freelancers: Freelancer[];
}

const FreelancerList: React.FC<FreelancerListProps> = ({ freelancers }) => {
  const [filter, setFilter] = useState('');

  const filteredFreelancers = freelancers.filter((freelancer) =>
    freelancer.names.toLowerCase().includes(filter) ||
    String(freelancer.years_experience).toLowerCase().includes(filter)
  );
const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setFilter(inputValue);
  };

  return (
    <div>
      <h2>Freelancer List</h2>
      <div>
        <label htmlFor="filter">Filter by Name or By Experience:</label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <ul>
          {filteredFreelancers.map((freelancer) => (
            <li key={freelancer.id}>
              <p>Name: {freelancer.names}</p>
              <p>About: {freelancer.about}</p>
              <p>Location: {freelancer.location}</p>
              <p>Category: {freelancer.category}</p>
              <p>Technologies: {freelancer.technologies.join(', ')}</p>
              <img src={freelancer.image} alt={freelancer.names} />
              <p>years_experience: {freelancer.years_experience}years</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerList;
