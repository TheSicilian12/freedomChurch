import { useState } from 'react';

// NOT SECURE! DO NOT ACTUALLY USE UNTIL SECURITY CAN BE ADDED
export function Login() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    return (
        <div className="pt-125 font-color-white display-flex flex-between">
            <div>Freedom Church</div>
           {/* <form>
                <div>
                    <label>Username</label>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}/>
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type='text'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}/>
                </div>
           </form> */}
        </div>
    )
}
