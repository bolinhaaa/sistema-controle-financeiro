import React, { useState } from "react";
import * as C from "./styles";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const Form = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const { user } = useAuth();

  const handleSave = async () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    }
    const newTransaction = {
      desc,
      amount: Number(amount) * (isExpense ? -1 : 1),
      expense: isExpense,
      createdAt: serverTimestamp(),
    };
    try {
      const collRef = collection(db, "users", user.uid, "transactions");
      await addDoc(collRef, newTransaction);
      setDesc("");
      setAmount("");
      setExpense(false);
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar: " + err.message);
    }
  };

  return (
    <C.Container>
      <C.InputContent>
        <C.Label>Descrição</C.Label>
        <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </C.InputContent>
      <C.InputContent>
        <C.Label>Valor</C.Label>
        <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
      </C.InputContent>
      <C.RadioGroup>
        <C.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(false)} />
        <C.Label htmlFor="rIncome">Entrada</C.Label>
        <C.Input type="radio" id="rExpenses" name="group1" onChange={() => setExpense(true)} />
        <C.Label htmlFor="rExpenses">Saída</C.Label>
      </C.RadioGroup>
      <C.Button onClick={handleSave}>ADICIONAR</C.Button>
    </C.Container>
  );
};

export default Form;
