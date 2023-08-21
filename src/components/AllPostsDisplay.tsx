import '../styles/all-posts-display.css';
import {deletePost, postsStore} from "../../store/post.store";
import {useStore} from "@nanostores/react";

function handlePostDelete(postSlug: string) {
    deletePost(postSlug)
}
export default function AllPostsDisplay() {
    const $posts = useStore(postsStore);

    return (
        <>
            <section className="section-posts">
                {
                    $posts.filter(post => post.authorSlug === 'maureen-lynch').map((post) => (
                        <article className="post">
                            <a href={`/posts/${post.slug}`}>
                                <img className="m-b-15" alt="Post image" src={post.image}/>
                                <h3>{post.title}</h3>
                            </a>
                            <span className="delete-button" onClick={() => handlePostDelete(post.slug)}>Delete</span>
                        </article>
                    ))
                }
            </section>
        </>
    )
}
