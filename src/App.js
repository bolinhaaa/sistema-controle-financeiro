// src/App.js
import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { db } from "./firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import TransactionList from "./components/TransactionList";

function PrivateApp() {
  const { user, logout } = useAuth();
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!user) return;
    const coll = collection(db, "users", user.uid, "transactions");
    const q = query(coll, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTransactionsList(items);
    });
    return unsub;
  }, [user]);

  useEffect(() => {
    const amounts = transactionsList.map((t) => Number(t.amount));
    const incomeCalc = amounts.filter((a) => a > 0).reduce((acc, a) => acc + a, 0);
    const expenseCalc = amounts.filter((a) => a < 0).reduce((acc, a) => acc + a, 0);
    const totalCalc = incomeCalc + expenseCalc;
    setIncome(incomeCalc);
    setExpense(expenseCalc);
    setTotal(totalCalc);
  }, [transactionsList]);

  return (
    <>
      <Header onLogout={logout} />
      <Resume income={income} expense={expense} total={total} />
      <Form transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      
      {/* 👇 Adicione esta linha */}
      <TransactionList transactions={transactionsList} />
      
      <GlobalStyle />
    </>
  );
}


function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
}

const App = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute><PrivateApp /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  </Router>
);


export default App;
