import React from "react";
import * as C from "./styles";

function Header({ onLogout }) {
  return (
    <C.Container>
      <h1>💰 Sistema Financeiro</h1>
      <C.ButtonLogout onClick={onLogout}>Sair</C.ButtonLogout>
    </C.Container>
  );
}

export default Header;
