import {
    addComment,
    comments,
    commentsStore,
    deleteComment,
    getCommentsByPostSlug,
    IComment
} from "../../store/comments.store";
import '../styles/post-comment-section.css';
import {MouseEvent, useState} from "react";
import {useStore} from "@nanostores/react";

function handleSendComment(event: MouseEvent<HTMLButtonElement>, newComment: IComment) {
    if (newComment.message === '') return;
    addComment(newComment);
}

function handleDeleteComment(event: MouseEvent<HTMLSpanElement>, commentId: number) {
    deleteComment(commentId);
}

export default function PostCommentSection(props: {postSlug: string}) {
    const {postSlug} = props;
    const [message, setMessage] = useState('');
    const $comments = useStore(commentsStore);

    return (
        <>
            <section className="comment-section">
                <div className="wrapper">
                    <div className="comment-section-header">
                        <h3>Leave a replay</h3>
                    </div>

                    <article className="new-comment">
                        <div className="new-message-section">
                            <img alt="avatar" src="/assets/image-5.png" className="sm-avatar" />
                            <textarea
                                onChange={e => setMessage(e.target.value)}
                                className="new-comment-textarea"
                                rows={4}
                                value={message}
                                placeholder="Add comment"
                                required
                            ></textarea>
                        </div>

                        <button
                            onClick={(e) => {
                                handleSendComment(
                            e,
                            {
                                postSlug,
                                message,
                                author: 'Maureen Lynch',
                                authorImage: '/assets/image-5.png'
                            }
                            );
                            setMessage('');
                            }}
                            className="btn btn-primary">Send</button>
                    </article>
                    {
                        $comments.filter(comment => comment.postSlug === postSlug).map(
                            (comment, id) => (
                            <article key={id} className="comment">

                                <div className="message-wrapper">
                                    <img className="sm-avatar" src={comment.authorImage} />
                                    <div>
                                        <h3 className="title">{ comment.author }</h3>
                                        <span className="comment-text">{comment.message}</span>
                                    </div>
                                </div>

                                {
                                    comment?.id &&
                                    <span onClick={e => handleDeleteComment(e, comment.id || 1)} className="delete-button">Delete</span>
                                }
                            </article>
                            ))
                    }
                </div>
            </section>
        </>
    )
}
