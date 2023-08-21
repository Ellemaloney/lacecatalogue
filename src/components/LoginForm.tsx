import {closeLoginForm, currentLoginStep, login, openLoginForm, openRegisterForm} from "../../store/login.store";
import '../styles/login-form.css';
import type { FormEvent  } from "react";
import {useStore} from "@nanostores/react";
import {LoginStep} from "../../store/login.store";
import {setRegisterInfo} from "../../store/register.store";

async function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    form.checkValidity();
    form.reportValidity();

    const [email  , password]  =  (Array(...form.elements) as HTMLInputElement[]).map((element) => element.value)

    if(!email || !password) return;

    await fetch('/api/login', {
        method: 'POST',
        })
    login();
    closeLoginForm();
    window.location.href = '/personal-area/profile';
}

async function handleRegisterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget;
    form.checkValidity();
    form.reportValidity();

    const [email  , password]  =  (Array(...form.elements) as HTMLInputElement[]).map((element) => element.value)

    if(!email || !password) return;

   setRegisterInfo({email, password});

    await fetch('/api/login', {
        method: 'POST',
    })
    login();
    closeLoginForm();
    window.location.href = '/register-questions';
}

export default function LoginForm() {
    const $currentLoginStep = useStore(currentLoginStep);
   return (
       <>
           {
               $currentLoginStep === LoginStep.start ? <Start />
                   : $currentLoginStep === LoginStep.login ? <Login />
                   : $currentLoginStep === LoginStep.register ? <Register />
                           : <></>
           }
       </>

   )
}

function Start() {
               return (
                   <div className="wrapper">
                       <h2 onClick={() => openLoginForm()} id="login-btn" className="title pointer">Log in</h2>
                       <p onClick={() => openRegisterForm()} className="title pointer">Create profile</p>
                       <a href="/catalogue" className="skip-text ">
                           <span className="m-r-15">Skip</span>
                           <img alt="right arrow" className="arrow" src="/assets/back-3-6fR.png" />
                       </a>
                   </div>
               )
}

function Login() {
    return (
        <div className="section">
            <h2 className="title-big m-b-20">Log in</h2>
            <form id="login-form" className="m-b-40" onSubmit={e => handleLoginSubmit(e )}>
                <div className="form-group m-b-20">
                    <label htmlFor="email" className="title">Email</label>
                    <input id="email" name="email" type="email" required />
                </div>

                <div className="form-group m-b-40">
                    <label htmlFor="password" className="title">Password</label>
                    <input id="password" name="password" type="password" required />
                </div>

                <input type="submit" value="Log in" className="btn btn-primary" />
            </form>
            <span className="pointer" onClick={closeLoginForm}>Back</span>
        </div>
        )
}

function Register() {
    return (
        <div className="section">
            <h2 className="title-big m-b-20">Create Profile</h2>
            <form id="login-form" className="m-b-20" onSubmit={e => handleRegisterSubmit(e )}>
                <div className="form-group m-b-20">
                    <label htmlFor="email" className="title">Email</label>
                    <input id="email" name="email" type="email" required />
                </div>

                <div className="form-group m-b-40">
                    <label htmlFor="password" className="title">Password</label>
                    <input id="password" name="password" type="password" required />
                </div>

                <div className="checkbox-wrapper m-b-20">
                    <input className="checkbox pointer" id="acceptTerms" name="acceptTerms" type="checkbox" required />
                    <label htmlFor="acceptTerms" className="pointer">I agree to the <span className="font-accent">Terms of Service</span> and <span className="font-accent">Privacy Policy</span></label>
                </div>

                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
            <span className="pointer" onClick={closeLoginForm}>Back</span>
        </div>
        )
}





