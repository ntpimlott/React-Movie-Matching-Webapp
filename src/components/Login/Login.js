import React, { useState } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import CardLayout from '../layout/CardLayout';

const Login = ({ setloginToken, setUser }) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitUser = (e) => {
        e.preventDefault();

        if (!username) {
            alert('Please enter Username');
        }
        if (!password) {
            alert('Please enter Password');
        }

        if (username && password) {
            authLogin();
        }
    }

    const authLogin = async () => {
        const res = await axios.post('http://localhost:3000/login', { username: username, password: password });
        const data = res.data;
        setloginToken(data[1].token);
        setUser(data[0].userid);

    }

    const onChange = (e) => {
        e.preventDefault();
        if (e.target.name === "Username") {
            setUsername(e.target.value);
        }
        else {
            setPassword(e.target.value);
        }
    }

    const bodyExport = <div>
        <form onSubmit={submitUser}>
            <input type="text" name="Username" placeholder="Enter Username" onChange={onChange} />
            <input type="password" name="Password" placeholder="Enter Password" onChange={onChange} />
            <input type='submit' value='Submit' className="btn" />
        </form>
    </div>

    return (
        <CardLayout title={"Login  Screen"} body={bodyExport} bodyClass={"text-center"} />
    )
}

Login.propTypes = {
    setloginToken: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}

export default Login
