import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./context";
import { LoginPage } from "./login";
import { ListPage } from "./list";
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
