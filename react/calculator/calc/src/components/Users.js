export default function User({user}) {
  return (
    <li>
      <p>{user.name}</p>
      {user.email && <p>Email: {user.email}</p>}
    </li>
  );
}
