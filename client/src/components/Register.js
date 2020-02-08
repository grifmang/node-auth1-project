import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

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
        axios.post('http://localhost:8000/api/register', user)
            .then(response => {
                console.log(response);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={user.username} name='username' type='text' onChange={handleChanges} placeholder='Username' />
            <input value={user.password} name='password' type='password' onChange={handleChanges} placeholder='Password' />
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register;