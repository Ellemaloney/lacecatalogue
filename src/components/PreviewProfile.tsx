import {useStore} from "@nanostores/react";
import {profileData} from "../../store/profile.store";
import '../styles/preview-profile.css';

export default function PreviewProfile() {
    const $profileData = useStore(profileData);

    return (

    <>
        <div className="about-wrapper">
            <section className="about-section">
                <h2 className="title-big m-b-15">{$profileData.name}</h2>
                <p className="text">{$profileData.about}</p>
            </section>
            <aside>
                <img className="avatar" src={`/assets/${$profileData.img}`} alt="profile picture" />
            </aside>
        </div>
    </>


    )

}
