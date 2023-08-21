import '../styles/modal.css';

export default function Modal({title, message, btnText, btnAction, isVisible}: {title: string, message: string, btnText: string, btnAction: any, isVisible: boolean}) {

    return (
        <>
        {
           isVisible ?
                    <div className="modal">
                        <div className="message-box">
                            <h2>{title}</h2>
                            <p>{message}</p>
                            <button onClick={() => btnAction()} className="btn btn-primary">{btnText}</button>
                        </div>
                    </div>
                : null
        }
        </>

    )
}
