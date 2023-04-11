import React from "react";
import Figure from "./components/molecules/Figure/Figure";
import Footer from "./components/organisms/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <main className="App advicegenerator flex flex--column flex__align--center">
      <Figure />
      <Footer className="advicegenerator__footer" />
    </main>
  );
}

export default App;
