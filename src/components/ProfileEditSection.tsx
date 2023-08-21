import '../styles/profile-edit-section.css';
import {
    toggleIsEditingProfile,
    isEditingProfile,
    isProfilePublic,
    toggleIsProfilePublic
} from "../../store/profile.store";
import {useStore} from "@nanostores/react";

export default function ProfileEditSection() {
    const $isEditing = useStore(isEditingProfile);
    const $isPublic = useStore(isProfilePublic);

    return (
        <>
            {
                $isEditing
                    ? (
                        <div className="publish-section">
                            <div className="publish-control title m-b-15">
                                <input className="pointer" id="doPublish" name="doPublish" type="checkbox" onChange={() => toggleIsProfilePublic()} checked={$isPublic} />
                                    <label htmlFor="doPublish" className="pointer">Make profile <span className="font-accent">public?</span></label>
                            </div>
                            <div className="confirmation-options">
                                <button onClick={() => toggleIsEditingProfile()} className="btn btn-primary m-r-20">Cancel</button>
                                <button onClick={() => toggleIsEditingProfile()} id="edit-button" className="btn btn-primary">Save</button>
                            </div>
                        </div>

                    )
                    : (
                        <div className="default-section">
                            <button onClick={() => toggleIsEditingProfile()} className="btn btn-primary m-b-40">Edit Profile</button>
                            <a href="/personal-area/profile-preview" className="btn btn-primary">View as public profile</a>
                        </div>
                    )
            }
        </>
    )
}
