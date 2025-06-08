import React, { useState } from 'react';

export default function UserForm({ fetchUsers }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', dob: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('http://localhost/user-api/api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
    fetchUsers();
    setForm({ name: '', email: '', password: '', dob: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <input name="dob" type="date" value={form.dob} onChange={handleChange} required />
      <button type="submit">Add User</button>
    </form>
  );
}
