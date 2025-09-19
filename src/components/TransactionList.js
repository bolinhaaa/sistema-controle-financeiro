import styled from "styled-components";

const HistoryContainer = styled.div`
  margin-top: 20px;
`;

const HistoryItem = styled.div`
  background: #fff;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const Description = styled.span`
  font-weight: 500;
`;

const Value = styled.span`
  color: ${props => (props.type === "entrada" ? "green" : "red")};
  font-weight: bold;
`;

const Actions = styled.div`
  button {
    margin-left: 8px;
    border: none;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }

  .edit {
    background: #ffc107;
    color: #000;
  }

  .delete {
    background: #e63946;
    color: #fff;
  }
`;

function TransactionItem({ descricao, valor, tipo }) {
  return (
    <HistoryItem>
      <Description>{descricao}</Description>
      <Value type={tipo}>R$ {valor}</Value>
      <Actions>
        <button className="edit">Editar</button>
        <button className="delete">Excluir</button>
      </Actions>
    </HistoryItem>
  );
}

export default TransactionItem;
