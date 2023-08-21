import {persistentAtom} from "@nanostores/persistent";
import {STORE_BASE_ENCODING} from "../src/consts";

export interface IPost {
    title: string;
    content: string;
    author: string;
    authorSlug: string;
    image: string;
    slug: string;
}

export const allPosts = [
    {
        title: 'Bobbin lace',
        content: 'Irish bobbin lace  from the early 20th century as a h homage to the craftsmanship of our lace-making ancestors. Capturing the intricate details and timeless beauty of this piece not only celebrates our heritage but also honors the dedication and artistry that went into its creation. It\'s a way of ensuring that their legacy endures and inspires future generations of lace makers to continue cherishing this remarkable tradition. Original source: https://commons.wikimedia.org/wiki/File:Irish_bobbin_lace_or_reticella.jpg',
        author: 'Maureen Lynch',
        authorSlug: 'maureen-lynch',
        image: '/assets/bobbin-lace.jpeg',
        slug: '1'
    },
    {
        title: 'Satin stitch',
        content: 'Experimenting with satin stitch',
        author: 'Maureen Lynch',
        authorSlug: 'maureen-lynch',
        image: '/assets/satin-stitch.png',
        slug: '2'
    },
    {
        title: 'Clones lace',
        content: 'experimenting with clones lace credit to https://www.instagram.com/gabriela_coniecto/',
        author: 'Maureen Lynch',
        authorSlug: 'maureen-lynch',
        image: '/assets/clone-lace.png',
        slug: '3'
    },
    {
        title: 'Clones lace collar',
        content: 'Clones lace collar Credit to https://www.instagram.com/gabriela_coniecto/',
        author: 'Maureen Lynch',
        authorSlug: 'maureen-lynch',
        image: '/assets/clone-lace-collar.png',
        slug: '4'
    },
    {
        title: 'Clones lace collar',
        content: 'Clones lace collar Credit to https://www.instagram.com/gabriela_coniecto/',
        author: 'Maureen Lynch',
        authorSlug: 'maureen-lynch',
        image: '/assets/clone-lace-collar-2.png',
        slug: '5'
    },
    {
        title: 'Bobbin lace',
        content: 'Bobbin lace created at the workshop taught by Karen Thompson online\n' +
            'Credit to https://www.instagram.com/gabriela_coniecto/',
        author: 'Jennifer Gallagher',
        authorSlug: 'jennifer-gallagher',
        image: '/assets/bobbin-lace-2.png',
        slug: '6'
    }
]

export const postsStore = persistentAtom<IPost[]>('posts', allPosts, STORE_BASE_ENCODING);


export function addPost(newPost: IPost) {
    postsStore.set([...postsStore.get(), newPost]);
}

export function deletePost(postSlug: string) {
    postsStore.set(postsStore.get().filter(post => post.slug !== postSlug));
}
