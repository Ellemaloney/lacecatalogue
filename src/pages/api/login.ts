import type {APIRoute} from "astro";

export const post: APIRoute = async ({cookies, request}) => {
    console.log('cookies', cookies)
    console.log('request', request)
    cookies.set('logged', 'true', {
        path: '/',
    });

    return new Response('', {status: 200})
}
