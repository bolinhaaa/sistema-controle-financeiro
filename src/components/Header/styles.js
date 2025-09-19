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

const HeaderContainer = styled.header`
  background: #007bff;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;

  img {
    width: 30px;
    margin-right: 8px;
  }
`;

const LogoutButton = styled.button`
  background: #e63946;
  border: none;
  color: #fff;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #d62839;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/icone.png" alt="logo" />
        Sistema Financeiro
      </Logo>
      <LogoutButton>Sair</LogoutButton>
    </HeaderContainer>
  );
}

export default Header;
