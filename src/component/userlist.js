const UserList = (props) => {
  const { users = [] } = props;
  console.log(props);
  if (users.length === 0) return null;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <a href={`/users/${user.id}`}>{user.email}</a>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
