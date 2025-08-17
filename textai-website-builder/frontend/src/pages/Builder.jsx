import React, { useState } from 'react';
import api from '../api';

function Builder() {
  const [prompt, setPrompt] = useState('Futuristic dashboard SaaS with gallery and hero');
  const [generated, setGenerated] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.post('/api/generate_page', { prompt });
      setGenerated(response.data.html || '');
    } catch (e) {
      setError('Generation failed. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>AI Builder</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Describe your site..."
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate with AI'}
        </button>
      </div>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <div style={{ marginTop: 16, border: '1px solid #ddd', borderRadius: 6, overflow: 'hidden' }}>
        <iframe
          title="preview"
          style={{ width: '100%', height: '70vh', border: 'none' }}
          srcDoc={generated}
        />
      </div>
    </div>
  );
}

export default Builder;