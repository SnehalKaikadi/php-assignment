import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const refreshUsers = () => {
    window.dispatchEvent(new Event('refreshUsers'));
  };

  return (
    <div>
      <h1>User CRUD App</h1>
      <UserForm fetchUsers={refreshUsers} />
      <UserList />
    </div>
  );
}

export default App;
