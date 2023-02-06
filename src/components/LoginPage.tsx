import axios from "axios"
import { useState } from "react"

function LoginPage(): JSX.Element {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const url = "http://localhost:4000";

    async function handleLogin() {
        const fetchedUserData = await axios.get(`${url}/users/${username}/${password}`)
        console.log(fetchedUserData)
        const userDataArr = fetchedUserData.data 
        console.log(userDataArr)
    }
    return (
        <>
        <p>Enter your details to access your account:</p>
        <p>Username</p>
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        <p>Password</p>
        <input type="text" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>LOGIN</button>
        </>
    )
}

export default LoginPage