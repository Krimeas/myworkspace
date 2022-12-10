import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="mt-auto bg-primary text-align-center">
        <h4>
          Made with React by 'Github11', 'Github12', 'Github13', 'Github14'
        </h4>
    </footer>
  );
};

export default Footer;
