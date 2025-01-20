import { Link } from 'react-router-dom';

export default function Card({ user }) {
  function statusCheckFunc(status) {
    switch (status) {
      case 'Alive':
        return <p className="card__status_online">Status: Online</p>;
      case 'Dead':
        return <p>Status: Offline</p>;
      default:
        return <p>Status: Unknown</p>;
    }
  }
  let liked = false;

  return (
    <div key={user.id}>
      <h4>{user.name}</h4>
      <img src={user.image} alt="character image" />
      {statusCheckFunc(user.status)}
      <button>Like</button>
      <Link to={`/profile/${user.id}`} state={{ user }}>
        View profile
      </Link>
    </div>
  );
}
