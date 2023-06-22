import React, {useState} from 'react';
import profile from '../assets/person-icon.jpeg'
import locate from '../assets/locates.png'
import { Freelancer, FreelancerListProps } from '../types/freelancerTypes'


const FreelancerList: React.FC<FreelancerListProps> = ({ freelancers }) => {
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const filteredFreelancers = freelancers.filter((freelancer) =>
    freelancer.names.toLowerCase().includes(filter) ||
    String(freelancer.years_experience).toLowerCase().includes(filter)
  );
const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setFilter(inputValue);
    setCurrentPage(1); 
  };

  const totalPages = Math.ceil(filteredFreelancers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFreelancers = filteredFreelancers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='container'>
      <div className='topHeader'>
      <h2>Find a Freelancer with us</h2>
      <div className='search'>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search..."
        />
      </div>
      </div>
      <div className='freelancer-container'>
          {currentFreelancers.map((freelancer) => (
            <div className='freelancer-list' key={freelancer.id}>
              <div className='profile'>
                <img src={profile} alt={freelancer.names} />
                <button>View {freelancer.names}</button>
              </div>
              <div className='profile-description'>
                <div className='profile-name'>{freelancer.names}</div>
                <div className='profile-category'>{freelancer.category}</div>
                <div className='profile-location'><img src={locate} />{freelancer.location}</div>
                <div className='profile-experience'>  {freelancer.years_experience} years_experience</div>
                <div className='profile-about'>{freelancer.about}</div>
                <div className='profile-technology'>
                  {freelancer.technologies.map((technology, index) => (
                    <span key={index} className='technology'>{technology}</span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FreelancerList;
