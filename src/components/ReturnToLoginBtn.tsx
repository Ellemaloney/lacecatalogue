import {openLoginForm} from "../../store/login.store";

function handleClick() {
    openLoginForm()
}

export default function ReturnToLoginBtn() {
    return (
        <>
            <a onClick={handleClick} href="/login" className="btn btn-primary">Return to login</a>
        </>
    )
}
