import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword, login, clear } from './loginSlice';

function Login() {
  const dispatch = useDispatch();

  // Accessing state from Redux store
  const { username, password, loggedIn } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button type="submit">Login</button>
          <button type="button" onClick={handleClear} style={{ marginLeft: '10px' }}>
            Clear
          </button>
        </div>
      </form>

      <div style={{ marginTop: '20px' }}>
        {loggedIn ? <p style={{ color: 'green' }}>You're logged in!</p> : <p>Please log in.</p>}
      </div>

      <hr />
      <h4>Data Collected:</h4>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default Login;
