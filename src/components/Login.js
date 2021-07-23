import  React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { auth } from '../firebase/firebase';

import { login } from '../features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [propic, setPropic] = useState("");
    const dispatch = useDispatch( );

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileURL: userAuth.user.photoURL,

            }));
        }).catch((error) => {alert(error)});
    };
    const register = () => {
        if(!fullname){
            //add modal here
            return alert("Please enter your full name");
        }
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName: fullname,
                    photoURL: propic,
                }).then(() => {
                    dispatch(
                        login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: fullname,
                            photoURL: propic,
                        })
                    );
                });
            }).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-500x313.png" alt=""/>
            <form>
                <input value = {fullname} onChange={e => setFullname(e.target.value)} placeholder = "Full Name" type="text"/>
                <input value = {propic} onChange={e => setPropic(e.target.value)} placeholder = "Image url(Optional)" type="text"/>
                <input value = {email} onChange={e => setEmail(e.target.value)} placeholder = "Email" type="email"/>
                <input value= {password} onChange={e => setPassword(e.target.value)} placeholder = "Password" type="password"/>
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member?{" "}
                <span className="login_register" onClick={register}>Register now</span>
            </p>
        </div>
    )
}


export default Login;
