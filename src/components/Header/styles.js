import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #007bff;
  color: white;
  padding: 15px 30px;
`;

export const ButtonLogout = styled.button`
  background: #dc3545;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
