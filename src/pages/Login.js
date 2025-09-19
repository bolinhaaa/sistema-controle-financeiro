import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  width: 350px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: ${(props) => (props.signup ? "#28a745" : "#007bff")};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 14px;
`;

function Login() {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Erro ao entrar: " + err.message);
    }
  };

  const handleSignup = async () => {
    try {
      setError("");
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError("Erro ao cadastrar: " + err.message);
    }
  };

  return (
    <Container>
      <Card>
        <h2>Bem-vindo</h2>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Error>{error}</Error>}
        <Button onClick={handleLogin}>Entrar</Button>
        <Button signup onClick={handleSignup}>
          Cadastrar
        </Button>
      </Card>
    </Container>
  );
}

export default Login;
