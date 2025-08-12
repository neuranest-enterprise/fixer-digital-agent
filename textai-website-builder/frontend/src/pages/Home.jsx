import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>AI Website Builder</h1>
      <p>Generate multi-page sites with AI. Start by opening the Builder.</p>
      <Link to="/builder">Go to Builder</Link>
    </div>
  );
}

export default Home;