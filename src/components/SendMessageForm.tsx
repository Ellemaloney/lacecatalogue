import {sendMessage} from "../../store/messages.store";
import '../styles/send-message-form.css';
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import Modal from "./Modal";

function handleSubmit(event: FormEvent<HTMLFormElement>, sender: string, email:string, message: string, setIsVisible: any ) {
    event.preventDefault();
    const messageForm = document.getElementById('message-form') as HTMLFormElement;
    messageForm!.checkValidity();
    messageForm!.reportValidity();

    if(!sender || !email || !message) return

    sendMessage({
       sender,
        email,
        message,
        date: new Date().toLocaleDateString()
    });

    setIsVisible(true);
}

function modalBtnAction(setIsVisible: Dispatch<SetStateAction<boolean>>) {
   resetForm();
   setIsVisible(false);
}

function resetForm() {
    const form = document.getElementById('message-form') as HTMLFormElement;
    form.reset();
}

export default function SendMessageForm() {
    const [sender, setSender] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isVisible, setIsVisible] = useState(false)



    return (
        <>
            <aside className="form-section">
                <form id="message-form" onSubmit={e => handleSubmit(e,sender,email ,message, setIsVisible)}>
                    <input onChange={e => setSender(e.target.value)} type="text" placeholder="Name" required />
                    <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" required/>
                    <textarea onChange={e => setMessage(e.target.value)} className="m-b-20" placeholder="Type your message here" required></textarea>

                    <input type="submit" className="m-b-20 btn custom-button" value="Submit" />
                </form>
            </aside>

            <Modal title="Success!"
                   message="Your message has been sent"
                   btnText="Return to contact form"
                   isVisible={isVisible}
                     btnAction={() => modalBtnAction(setIsVisible)}

            />
        </>
    )
}

