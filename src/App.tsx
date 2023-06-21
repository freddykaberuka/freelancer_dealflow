import React from 'react';
import freelancerData from './data/freelancer.json';
import FreelancerList from './components/FreelancerList';

const App: React.FC = () => {
  return (
    <div>
      <FreelancerList freelancers={freelancerData} />
    </div>
  );
};

export default App;
