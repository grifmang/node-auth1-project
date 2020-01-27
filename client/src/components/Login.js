import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/login', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            alert('User Logged In.');
            setUser({
                username: '',
                password: ''
            })
        })
        .catch(err => {
            console.log(err.response);
        })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={user.username} onChange={handleChanges} name='username' placeholder='Username' type='text' />
        <input value={user.password} name='password' onChange={handleChanges} type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
