import {logout} from "../../store/login.store";

async function handleLogout() {
    await fetch('/api/logout', {
        method: 'POST',
    });
    logout();
    window.location.href = '/login';
}
export default function LogoutBtn() {
    return (
        <>
            <span onClick={handleLogout} className="pointer">Log out</span>
        </>
    )
}
