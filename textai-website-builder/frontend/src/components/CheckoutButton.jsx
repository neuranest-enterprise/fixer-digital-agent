import React, { useState } from 'react';
import api from '../api';

function CheckoutButton({ priceId, amountCents = 5000, label = 'Buy Pro ($50)' }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await api.post('/api/checkout/create_session', {
        price_id: priceId || null,
        amount: priceId ? null : amountCents,
        mode: 'payment',
      });
      const url = res.data?.url;
      if (url) window.location.href = url;
      else setError('Missing checkout URL');
    } catch (e) {
      setError('Checkout failed. Check backend Stripe config.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Redirecting…' : label}
      </button>
      {error && <div style={{ color: 'crimson' }}>{error}</div>}
    </div>
  );
}

export default CheckoutButton;