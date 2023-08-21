import {persistentAtom} from "@nanostores/persistent";
import {STORE_BASE_ENCODING} from "../src/consts";
import type {WritableAtom} from "nanostores";
export interface IMessage {
    sender: string;
    email: string;
    message: string;
    date: string;
}

export const messages: WritableAtom<IMessage[]> = persistentAtom('messages', [
    {
        sender: 'Michelle Felix',
        email: 'mich.feloz@gmail.com',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, architecto, aut corporis cupiditate, dolore dolorum eaque eveniet exercitationem impedit incidunt laudantium maiores molestias nisi nostrum provident quam quis! Molestiae, nam! Adipisci aliquid animi architecto autem beatae cum, distinctio doloremque ducimus earum eius, eligendi laboriosam laborum modi mollitia, nostrum obcaecati odio quas rem repellat sed sit vel voluptate voluptatem. Asperiores, quas? Ad architecto dolor eligendi exercitationem, hic ipsam libero nam optio porro quis! Accusamus accusantium consequatur, dignissimos magnam minus molestiae numquam odio officia quae qui recusandae repellat sequi, sunt ullam voluptate.',
        date: '2023-08-15',
    }
],STORE_BASE_ENCODING)

export function sendMessage(message: IMessage) {
    const data = messages.get();
    messages.set([...data, message]);
}
