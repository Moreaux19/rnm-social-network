import { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setItems(data.results));
  }, []);

  return (
    <>
      {items.map(item => (
        <Card item={item} />
      ))}
    </>
  );
}

export default App;
