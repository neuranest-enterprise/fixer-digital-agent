import React from 'react';

function AIBuilder({ onGenerate }) {
  return (
    <div style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <h3>AI Builder Panel</h3>
      <p>Use the main Builder page to generate a site. This panel is ready for future controls.</p>
      <button onClick={onGenerate}>Generate</button>
    </div>
  );
}

export default AIBuilder;