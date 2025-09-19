import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import * as C from "./styles";

function ModalEdit({ item, onClose }) {
  const { user } = useAuth();
  const [desc, setDesc] = useState(item.desc);
  const [amount, setAmount] = useState(item.amount);
  const [expense, setExpense] = useState(item.expense);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;
    try {
      const ref = doc(db, "users", user.uid, "transactions", item.id);
      await updateDoc(ref, {
        desc,
        amount: Number(amount),
        expense,
      });
      onClose();
    } catch (err) {
      console.error("Erro ao editar:", err);
      alert("Erro ao editar: " + err.message);
    }
  };

  return (
    <C.Overlay>
      <C.Modal>
        <h2>Editar Transação</h2>
        <form onSubmit={handleUpdate}>
          <C.InputContent>
            <C.Label>Descrição</C.Label>
            <C.Input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </C.InputContent>

          <C.InputContent>
            <C.Label>Valor</C.Label>
            <C.Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </C.InputContent>

          <C.RadioGroup>
            <label>
              <input
                type="radio"
                checked={!expense}
                onChange={() => setExpense(false)}
              />
              Entrada
            </label>
            <label>
              <input
                type="radio"
                checked={expense}
                onChange={() => setExpense(true)}
              />
              Saída
            </label>
          </C.RadioGroup>

          <C.Buttons>
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </C.Buttons>
        </form>
      </C.Modal>
    </C.Overlay>
  );
}

export default ModalEdit;
