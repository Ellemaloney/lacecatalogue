import type {APIRoute} from "astro";

export const post: APIRoute = async ({cookies, request}) => {
    cookies.delete('logged', {
        path: '/',
    })

    return new Response('', {status: 200})
}
