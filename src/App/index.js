import React from "react";

import WelcomeMessage from "./WelcomeMessage";
// import {
//   MyButton,
//   AnotherButton,
//   InheritedButton,
//   SimpleButton
// } from "./TestStyles";
import AppLayout from './styles/AppLayout';
import "./App.css";
import AppBar from './AppBar/AppBar';

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
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
