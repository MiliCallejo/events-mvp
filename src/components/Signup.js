import React from 'react';
import axios from 'axios';

function Signup({ eventId }) {
  const handleSignup = () => {
    axios.post(`/api/eventos/${eventId}/inscribirse`)
      .then(response => alert('Inscripción exitosa'))
      .catch(error => alert('Error al inscribirse'));
  };

  return (
    <button onClick={handleSignup}>Inscribirse</button>
  );
}

export default Signup;
