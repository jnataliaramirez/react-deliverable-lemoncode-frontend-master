import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./context";
import { LoginPage } from "./pages/Login";
import { ListPage } from "./pages/ListPage";
import { DetailPage } from "./pages/MemberDetail";

export const App = () => {
  return (
    <MyContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </MyContextProvider>
  );
};
