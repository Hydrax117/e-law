import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Example } from "./components/pages/example";
import { Home } from "./components/pages/home/home";
import { UserLogin } from "./components/pages/user/login";
import { UserRegister } from "./components/pages/user/register";
import { ViewLaywers } from "./features/users/viewLawyers";
import { LawyerProfile } from "./features/users/lawyerProfile";
import { LawyerRegister } from "./features/lawyers/lawyerRegister";

function App() {
  const { t } = useTranslation();
  const userName = "David";
  return (
    <>
      <Router>
        <Routes>
          <Route path="/example" Component={Example} />
          <Route path="/" Component={Home} />
          <Route path="/login" Component={UserLogin} />
          <Route path="/register" Component={UserRegister} />
          <Route path="/lawyers" Component={ViewLaywers} />
          <Route path="/lawyer-profile" Component={LawyerProfile} />
          <Route path="/lawyer/register" Component={LawyerRegister} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
