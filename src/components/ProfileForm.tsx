import {useStore} from "@nanostores/react";
import {isEditingProfile, profileData, updateProfileData} from "../../store/profile.store";
import '../styles/profile-form.css';
import type {ChangeEvent} from "react";

function updateData(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) {
    console.log(event)
    updateProfileData(key, event?.target?.value || "");
}
export default function ProfileForm() {
    const $isEditing = useStore(isEditingProfile);
    const $profileData = useStore(profileData);

    return (
        <>
            <section className="section-left">
                <h2 className="title m-b-15 m-l-55">My profile</h2>
                <div className="form-group">
                    <label htmlFor="name" className="title">Name</label>
                    <input onChange={(e) => updateData(e, 'name')} value={$profileData.name} disabled={!$isEditing} id="name" name="name" type="text" className="input" />
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="title">Address</label>
                    <input onChange={(e) => updateData(e, 'address')} value={$profileData.address} disabled={!$isEditing} id="address" name="address" type="text" className="input" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="title">Email</label>
                    <input onChange={(e) => updateData(e, 'email')} value={$profileData.email} disabled={!$isEditing} id="email" name="email" type="email" className="input" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="title">Phone</label>
                    <input onChange={(e) => updateData(e, 'phone')} value={$profileData.phone} disabled={!$isEditing} id="phone" name="phone" type="text" className="input" />
                </div>

                <label htmlFor="about" className="title m-b-15 m-l-55">About me</label>
                <textarea  onChange={(e) => updateData(e, 'about')} value={$profileData.about} disabled={!$isEditing} id="about" name="about" rows={8}></textarea>

            </section>
        </>
    )
}
