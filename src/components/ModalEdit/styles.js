import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  max-width: 95%;
`;

export const InputContent = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    padding: 8px 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  button[type="submit"] {
    background: #4caf50;
    color: white;
  }

  button[type="button"] {
    background: #ccc;
  }
`;
