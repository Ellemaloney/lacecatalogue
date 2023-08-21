import {atom, map} from "nanostores";
interface IRegisterData {
    email: string;
    password: string;
}

export const $registerInfo = map<IRegisterData>( {
    email: "",
    password: "",
});

export function setRegisterInfo(data: IRegisterData) {
    $registerInfo.set(data);
}
