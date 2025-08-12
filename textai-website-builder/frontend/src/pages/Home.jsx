import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutButton from '../components/CheckoutButton';

function Home() {
  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>AI Website Builder</h1>
      <p>Generate multi-page sites with AI. Start by opening the Builder.</p>
      <p>
        <Link to="/builder">Go to Builder</Link>
      </p>
      <h3>Upgrade</h3>
      <CheckoutButton />
    </div>
  );
}

export default Home;