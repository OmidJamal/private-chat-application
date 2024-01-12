import React from 'react';

function Login() {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Omit Chat</span>
                <span className="title">Login</span>
                <form>
                    <input required type="email" placeholder="email"/>
                    <input required type="password" placeholder="password"/>
                    <button>Sign In</button>
                </form>
                <p>
                    You dont have an account?Register
                </p>
            </div>
        </div>
    );
}

export default Login;
