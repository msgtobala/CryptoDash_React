import React from "react";

import Settings from "../settings/index";
// import {
//   MyButton,
//   AnotherButton,
//   InheritedButton,
//   SimpleButton
// } from "./TestStyles";
import AppLayout from "./styles/AppLayout";
import "./App.css";
import AppBar from "./AppBar/AppBar";
import Content from "../Shared/Content";

import AppProvider from "./AppProvider";

function App() {
  return (
    // <React.Fragment>
    //   <WelcomeMessage />
    //   <MyButton> Hello </MyButton>
    //   <MyButton primary> Hai </MyButton>
    //   <AnotherButton primary> Hello </AnotherButton>
    //   <InheritedButton>CLICK ME</InheritedButton>
    //   <SimpleButton primary> Test </SimpleButton>
    // </React.Fragment>
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
