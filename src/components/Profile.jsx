import { Link, useLocation, useParams } from 'react-router-dom';

export function Profile() {
  const { id } = useParams();
  const location = useLocation();
  const user = location.state?.user;
  return (
    <>
      <Link to="/">Homepage</Link>
      <div key={user.id}>
        <h4>{user.name}</h4>
        <img src={user.image} alt="character image" />
        <span>{user.species}</span>
        {user.type ? <p>About me: {user.type}</p> : <span></span>}
        <p>Location: {user.location.name}</p>
      </div>
    </>
  );
}
