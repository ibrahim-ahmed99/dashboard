import { useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import FrontNav from "../FronNav/FrontNav";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const handleSubmit = () => {
    if(email==='admin@gmail.com' && password==='123456'){
      localStorage.setItem('email', email);
      localStorage.setItem('is_login', true);
      Navigate("/dashbord");   
     }
    else{
      alert('wrong email or password')
    }
  };
  return (
    <div className="container">
        <FrontNav/>
      <div className={styles.login}>
      
      <div>
      <h2>Login</h2>
        <div className={styles.form}>
          <label>Email :</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', borderRadius: '5px' }}
            type="email"
            value={email}
            placeholder="Enter your Email"
          />
        </div>
        <br />
        <div className={styles.form}>
          <label>Password :</label>
          <input
            style={{ padding: '10px', borderRadius: '5px' }}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
          />
        </div>
        <button onClick={handleSubmit}  >Submit </button>
      </div>
      </div>
    </div>
  );
}
