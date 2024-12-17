export default function Card({ item }) {
  function statusCheck(status) {
    switch (status) {
      case 'Alive':
        return <p>Status: Online</p>;
      case 'Dead':
        return <p>Status: Offline</p>;
      default:
        return <p>Status: Unknown</p>;
    }
  }
  return (
    <div key={item.id}>
      <h4>{item.name}</h4>
      <img src={item.image} alt="character image" />
      <span>{item.species}</span>
      {statusCheck(item.status)}
    </div>
  );
}
