import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/eventos')
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Eventos</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/eventos/${event.id}`}>{event.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
