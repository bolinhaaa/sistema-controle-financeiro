import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import ModalEdit from "./ModalEdit";

function TransactionList({ transactions }) {
  const { user } = useAuth();
  const [editItem, setEditItem] = useState(null);

  const handleDelete = async (id) => {
    if (!user) return;
    await deleteDoc(doc(db, "users", user.uid, "transactions", id));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Histórico</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {transactions.map((t) => (
          <li key={t.id} style={{
            background: "#fff",
            margin: "8px 0",
            padding: "10px 15px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <span>
              <strong>{t.desc}</strong> — R${t.amount}
              <span style={{
                color: t.expense ? "red" : "green",
                marginLeft: "10px"
              }}>
                {t.expense ? "(Saída)" : "(Entrada)"}
              </span>
            </span>
            <div>
              <button
                onClick={() => setEditItem(t)}
                style={{
                  marginRight: "10px",
                  background: "#ffc107",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(t.id)}
                style={{
                  background: "#dc3545",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editItem && (
        <ModalEdit
          item={editItem}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
}

export default TransactionList;
