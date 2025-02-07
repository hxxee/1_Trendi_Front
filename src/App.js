import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Main from "./pages/Main";
import RecipeMaker from "./pages/RecipeMake";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recipemaker" element={<RecipeMaker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
