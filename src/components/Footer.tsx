import React from 'react';
import logo from '../assets/dealflo.webp'

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer>
      <img src={logo} />
      <p>&copy; {year} {companyName}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
