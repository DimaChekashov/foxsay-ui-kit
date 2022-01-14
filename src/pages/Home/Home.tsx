import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <h2 className="home-title">Build fast, responsive sites with foxsay-ui-kit</h2>
      <p className="home-desc">Quickly design and customize responsive mobile-first sites with foxsay-ui-kit.</p>
      <Link to="docs" className="home-link">Get started</Link>
    </div>
  );
};

export default Home;