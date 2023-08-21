import {atom} from "nanostores";
import {persistentAtom, persistentMap} from "@nanostores/persistent";
import {STORE_BASE_ENCODING} from "../src/consts";
export interface IProfile {
    name: string,
    address: string,
    email: string,
    phone: string,
    about: string,
    img: string
}

export const isEditingProfile = persistentAtom('isEditingProfile', false, STORE_BASE_ENCODING);
export const isProfilePublic = persistentAtom('idProfilePublic', false, STORE_BASE_ENCODING);
export const profileData= persistentMap('profileData', {
    name: 'Maureen Lynch',
    address: 'Ridgeley House, Merlin, Galway, Ireland',
    email: 'maureenlynch@gmail.com',
    phone: '0896543432',
    about: 'My name is Maureen and I’m a passionate designer with 20 years experience in Lace making. I love solving problems and I can almost never say no to a challenge. My motto is to be at least 1% better every day , which is why I always look for ways to improve myself.',
    img: 'image-5.png'
})

export function toggleIsEditingProfile() {
    isEditingProfile.set(!isEditingProfile.get());
}

export function toggleIsProfilePublic() {
    isProfilePublic.set(!isProfilePublic.get());
}

export function updateProfileData(key: string, value: string) {
    const data = profileData.get();
    profileData.set({...data, [key]: value});
}
