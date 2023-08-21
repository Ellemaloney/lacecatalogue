import {persistentAtom} from "@nanostores/persistent";
import {STORE_BASE_ENCODING} from "../src/consts";

export interface IComment {
    id?: number;
    postSlug: string;
    message: string;
    author: string;
    authorImage: string;
}
export const comments = [
    {
        id: 1,
        postSlug: '1',
        message: 'This is a comment',
        author: 'Maureen Lynch',
        authorImage: '/assets/maureen-lynch.png',
    }
    ];

export const commentsStore = persistentAtom<IComment[]>('comments', comments, STORE_BASE_ENCODING);

export function addComment(newComment: IComment) {
    const id = commentsStore.get().length + 1 + 1;
    newComment.id = id;
    commentsStore.set([...commentsStore.get(), newComment]);
}

export function deleteComment(id: number) {
    commentsStore.set(commentsStore.get().filter(comment => comment.id !== id));
}

export function getCommentsByPostSlug(postSlug: string) {
    return commentsStore.get().filter(comment => comment.postSlug === postSlug);
}
