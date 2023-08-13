import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header";
import { Home } from "./containers/home";
import { Candidates } from "./containers/candidates";

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/candidates" element={<Candidates />} />
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>
  );
};
