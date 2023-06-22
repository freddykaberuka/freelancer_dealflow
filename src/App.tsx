import React from 'react';
import freelancerData from './data/freelancer.json';
import FreelancerList from './components/FreelancerList';
import Navbar from './components/Navbar';
import './components/freelancer.css'
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <FreelancerList freelancers={freelancerData} />
      <Footer companyName="Freddy Kaberuka" year={2023}/>
    </div>
  );
};

export default App;
