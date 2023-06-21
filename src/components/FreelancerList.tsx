import React, {useState} from 'react';

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
  const [filter, setFilter] = useState('');

  const filteredFreelancers = freelancers.filter((freelancer) =>
    freelancer.names.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Freelancer List</h2>
      <div>
        <label htmlFor="filter">Filter by Name:</label>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerList;
