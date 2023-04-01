import { useState } from "react";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    return(
        <div>
            <input class="input-group mb-3" style={{width: "20vh", height: "4vh"}}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            />
             <input class="input-group mb-3" style={{width: "20vh", height: "4vh"}}
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
            />
            <button class="btn btn-primary"
                onClick={()=> handleClick(email,pass)}>
                {title}
            </button>
        </div>
    )
}

export {Form}