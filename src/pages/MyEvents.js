import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyEvents() {
  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    axios.get('/api/inscripciones/mis-inscripciones')
      .then(response => setInscripciones(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Mis Inscripciones</h1>
      <ul>
        {inscripciones.map(inscripcion => (
          <li key={inscripcion.id}>{inscripcion.Event.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyEvents;
