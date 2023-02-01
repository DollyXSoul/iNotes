import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Signin = (props) => {



    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert("Account created successfully !!", 'success')
        }
        else {
            props.showAlert("Invalid details", 'danger')
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Name">UserName</label>
                    <input type="text" className="form-control" id="name" value={credentials.name} name='name' placeholder="Enter UserName" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email address</label>
                    <input type="email" className="form-control" id="email" value={credentials.email} name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} name='password' placeholder="Password" onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signin;
