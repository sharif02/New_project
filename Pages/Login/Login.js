import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './LogIn.css';
// import img from '../../images/login-imag.jpg'

const LogIn = () => {
    const { signInpopup } = UseAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleSignInpopup = () => {
        signInpopup()
            .then((result) => {
                history.replace(redirect_url)
            });
    }
    return (
        <div>
            < h2 > This IS login page</h2 >

            <div className="shadow-lg p-3 mb-5 bg-white rounded w-50 mx-auto secondary">
                <Form.Floating className="mb-3 w-50 mx-auto">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Enter Your Email address</label>
                </Form.Floating>
                <Form.Floating className="mb-3 w-50 mx-auto">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Enter your Password</label>
                </Form.Floating>

                <input type="submit" value="LogIn" />
                <br />or
                <br /><br />
                {
                    <Button onClick={handleSignInpopup} variant="outline-warning" className="mb-5">Sign In Google</Button>
                }
                <br />
                <p>New User</p><Link to="/signup">Create Account</Link>
            </div>

        </div >
    );
};

export default LogIn;