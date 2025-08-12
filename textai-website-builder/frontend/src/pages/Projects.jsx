import React, { useEffect, useState } from 'react';
import api from '../api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await api.get('/api/projects');
        setProjects(res.data || []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Projects</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {projects.map((p) => (
            <li key={p.id}>{p.name} — {new Date(p.created_at).toLocaleString()}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;