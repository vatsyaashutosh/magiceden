import React from "react";

import "./App.css";
import * as s from "./styled";
import { Header1 } from "./components/Header1/Header1";
import { Header } from "./components/Header/Header";
import { SideNavbar } from "./components/SideNavbar/SideNavbar";
import LandingPage from "./components/LandingPage/LandingPage";
import PopularCollection from "./components/PopularCollections/PopularCollection";
function App() {
  return (
    <s.LandingPageContainer>
      <Header1 />
      <Header />
      <SideNavbar />
      <LandingPage />
      <PopularCollection />
    </s.LandingPageContainer>
  );
}

export default App;
