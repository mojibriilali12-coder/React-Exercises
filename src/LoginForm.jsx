import { useState } from "react";


const LoginForm =()=>{


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [message, setMessage] = useState("");
     


    const handleSignIn =()=>{
       username && password
            ? (setLoggedIn(true), setMessage("Welcome to page"))
            : setMessage("Please enter username and password");
    }

  const handleSignOut = () => {
        setLoggedIn(false);
        setUsername("");
        setPassword("");
        setMessage("You have signed out");
    };


    return(
        <div>
         {!loggedIn ? (
                <>
                    <input
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={handleSignIn}>Sign In</button>
                </>
            ) : (
                <button onClick={handleSignOut}>Sign Out</button>
            )}

            <p>{message}</p>
        </div>
    );

}


export default LoginForm;