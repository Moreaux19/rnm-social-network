import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => setUsers(response.data.results));
  });

  return (
    <>
      {users.map(user => (
        <Card user={user} />
      ))}
      <div>
        <p>Footer item</p>
        <p>Contacts</p>
      </div>
    </>
  );
}
