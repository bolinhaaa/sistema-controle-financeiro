import { useState } from "react";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import ModalEdit from "../ModalEdit";

function Grid({ items }) {
  const { user } = useAuth();
  const [editItem, setEditItem] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja excluir esta transação?")) return;
    try {
      await deleteDoc(doc(db, "users", user.uid, "transactions", id));
    } catch (err) {
      console.error("Erro ao excluir:", err);
      alert("Erro ao excluir: " + err.message);
    }
  };

  return (
    <>
      <C.Table>
        <thead>
          <tr>
            <C.TableHeadColumn width={40}>Descrição</C.TableHeadColumn>
            <C.TableHeadColumn width={40}>Valor</C.TableHeadColumn>
            <C.TableHeadColumn width={20}>Ações</C.TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <C.TableColumn>{item.desc}</C.TableColumn>
              <C.TableColumn>R$ {item.amount}</C.TableColumn>
              <C.TableColumn>
                <button onClick={() => setEditItem(item)}>✏️ Editar</button>
                <button onClick={() => handleDelete(item.id)}>🗑️ Excluir</button>
              </C.TableColumn>
            </tr>
          ))}
        </tbody>
      </C.Table>

      {editItem && (
        <ModalEdit
          item={editItem}
          onClose={() => setEditItem(null)}
        />
      )}
    </>
  );
}
