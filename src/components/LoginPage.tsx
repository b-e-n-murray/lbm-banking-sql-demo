import axios from "axios";
import { useState } from "react";

interface LoginPageProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setUserID: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function LoginPage(props: LoginPageProps): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:4000";

  async function handleLogin() {
    const fetchedUserData = await axios.get(
      `${url}/users/${username}/${password}`
    );
    console.log(fetchedUserData);
    const userDataArr = fetchedUserData.data;
    console.log("userdataarr:", userDataArr);
    props.setUserID(userDataArr[0].id)
    if (userDataArr.length > 0) {
      props.setLoggedIn(true);
    } else {
      alert(
        "Either your username, password, or both are invalid. Pleast try again"
      );
    }
  }
  return (
    <>
      <div className="login-form">
        <p>Enter your details to access your account:</p>
        <p>Username</p>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <p>Password</p>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </>
  );
}

export default LoginPage;
