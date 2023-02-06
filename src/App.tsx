import AppHeader from "./components/AppHeader";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import "./App.css";
import { useState } from "react";

function App(): JSX.Element {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <>
      <AppHeader />
      {!loggedIn ? <LoginPage setLoggedIn={setLoggedIn} /> : <HomePage />}
    </>
  );
}

export default App;
