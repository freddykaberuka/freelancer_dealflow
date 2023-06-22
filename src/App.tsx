import React from 'react';
import freelancerData from './data/freelancer.json';
import FreelancerList from './components/FreelancerList';
import Navbar from './components/Navbar';
import './components/freelancer.css'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <FreelancerList freelancers={freelancerData} />
    </div>
  );
};

export default App;
