import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EventDetail() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/eventos/${id}`)
      .then(response => setEvent(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleSignup = () => {
    axios.post(`/api/eventos/${id}/inscribirse`)
      .then(response => alert('Inscripción exitosa'))
      .catch(error => alert('Error al inscribirse'));
  };

  if (!event) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{event.titulo}</h1>
      <p>{event.descripcionLarga}</p>
      <button onClick={handleSignup}>Inscribirse</button>
    </div>
  );
}

export default EventDetail;
