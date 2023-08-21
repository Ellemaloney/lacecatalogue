import '../styles/mailbox.css';
import {useStore} from "@nanostores/react";
import {messages} from "../../store/messages.store";
export default function MailBox() {
    const $messages = useStore(messages);
    const today = new Date();

   return (
       <>
           <section className="mailbox">
               {
                     $messages.map((message, index) => (
                             <div className="message-item" key={index}>
                                 <span>{message.date}</span>
                                 <span>{message.sender}</span>
                                 <span className="message-preview">{message.message}</span>
                             </div>
                    ))
               }
           </section>
       </>
   )
}
