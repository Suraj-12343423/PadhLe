// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


//Created a continer for login page
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(200deg, #ff0000, #000000);
`;

//Login box styling
const LoginBox = styled.div`
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #454545;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

//Title css
const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #FFF;
`;

//Text box 
const Input = styled.input`
  width: 95%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    border-color: #6b8dd6;
    outline: none;
    box-shadow: 0 0 5px rgba(107, 141, 214, 0.5);
  }
`;

// button style
const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background-color: #6b8dd6;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 1rem;
  &:hover {
    background-color: #5a7cc0;
  }
`;

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', { username, password }, { withCredentials: true });
      alert('Login Successful');
      navigate('/dashboard');
    } catch {
      alert('Invalid Credentials');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { username, password });
      alert('Registration Successful');
      setIsLogin(true);
      navigate('/dashboard');
    } catch {
      alert('Registration Failed');
    }
  };

  const handleSubmit = (e) => {
    if (isLogin) {
      handleLogin(e);
    } else {
      handleRegister(e);
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>{isLogin ? 'Login' : 'Register'}</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
        </form>
        <Button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </Button>
      </LoginBox>
    </Container>
  );
}

export default App;






