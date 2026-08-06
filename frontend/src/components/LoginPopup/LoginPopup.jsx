import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Login");
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = () => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data,[name]:value}))          
} 

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>

                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt=""
                    />
                </div>

                <div className="login-popup-inputs">
                    {currentState === "Sign Up" && (
                        <input name='name' onChange={onChangeHandler}
                            value ={data.name}
                            type="text"
                            placeholder="Your name"
                            required
                        />
                    )}

                    <input name='email' onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder="Your email"
                        required
                    />

                    <input name='password' onChange={onChangeHandler}
                        value = {data.password}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>

                <button>
                    {currentState === "Sign Up"
                        ? "Create account"
                        : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type = "checkbox" required />
                    <p>
                        By continuing, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
                {currentState === "Login"?
                <p>Create a New account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
                : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
                }
                
                
            </form>
        </div>
    );
};

export default LoginPopup;