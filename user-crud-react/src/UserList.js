import React, { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost/user-api/api.php');
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async id => {
    await fetch('http://localhost/user-api/api.php', {
      method: 'DELETE',
      body: new URLSearchParams({ id })
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
    window.addEventListener('refreshUsers', fetchUsers);
    return () => window.removeEventListener('refreshUsers', fetchUsers);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
