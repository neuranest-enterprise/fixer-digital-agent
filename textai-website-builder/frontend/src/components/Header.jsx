import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: 12, borderBottom: '1px solid #e5e7eb', display: 'flex', gap: 12 }}>
      <Link to="/">Home</Link>
      <Link to="/builder">Builder</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/settings">Settings</Link>
    </header>
  );
}

export default Header;