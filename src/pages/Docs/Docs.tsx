import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tag } from '../../docs-components';

import './Docs.scss';

const Docs = () => {
  return (
    <div className="docs">
      <div className="docs-sidebar">
        <h3 className="docs-list-title">Title</h3>
        <ul className="docs-list">
          <li><Link to="/">Test</Link></li>
          <li><Link to="/">Test</Link></li>
          <li><Link to="/">Test</Link></li>
          <li><Link to="/">Test</Link></li>
          <li><Link to="/">Test</Link></li>
        </ul>
      </div>
      <div className="docs-chart">
        <h3 className="docs-title">Test Title</h3>
        <p className="docs-desc">Test description</p>
        <Button/>
        <Tag/>
      </div>
    </div>
  );
};

export default Docs;