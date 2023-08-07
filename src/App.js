import React from "react";
import { Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import { GlobalStyleWrapper } from "./style";

function App() {
  return (
    <GlobalStyleWrapper >
      <div className="app">
      <Navbar/>
      <Header/>
      <Work/>
      <Skills/>
      <Footer/>
      </div>
    </GlobalStyleWrapper>
  );
}

export default App;
