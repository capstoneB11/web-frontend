import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Layouts from "./components/Layouts";
import Public from "./pages/Public";
import { LoginPage, RegisterPage, HomePage, StatisticPage } from "./pages";
import Error from "./utils/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Public />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="dashboard">
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="stats" element={<StatisticPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
