import {useNavigate} from "react-router-dom";
import {db} from "../firebase";
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth'
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignIn() {
    const [formData, setFormData] = useState(
    {
        email:"",
        password:"",
    });
    const {email, password} = formData;
    const navigate = useNavigate()
    
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    async function onSubmit(e) {
        e.preventDefault();
        try{
            const auth = getAuth();
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);
            if(userCredentials.user){
                navigate("/gallery");
            }
            toast.success("Login successful")
        }catch(error){
            toast.error("Login failed, please try again")
        }
    }
    return(
        <div>
            <form className="form-signin" onSubmit={onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input value={email} type="email" onChange={onChange} id="email" className="form-control" placeholder="Email address" required autofocus/>
                <label for="inputPassword" className="sr-only">Password</label>
                <input id="password" type="password" value={password} onChange={onChange} className="form-control" placeholder="Password" required/>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
            </form>
        </div>
    )
}