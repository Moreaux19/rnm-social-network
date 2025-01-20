import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);

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
