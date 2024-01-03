import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, setDefaultOptions, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const inNewCommentEmpty = newCommentText.length === 0;

  const handleCreatedNewComment = (event) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity("");
  };

  const handleNewCommentInvalid = (event) => {
    event.target.setCustomValidity("This field is required");
  };

  const deleteComment = (commentToDelete) => {
    const commentsWithOutDelete = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithOutDelete);
  };

  // const publishedAtFormat = new Intl.DateTimeFormat("pt-BR", {
  //   dateStyle: "full",
  //   timeStyle: "long",
  // }).format(publishedAt);
  // setDefaultOptions({ locale: ptBR });

  const publishedDateFormat = format(
    publishedAt,
    "dd 'de' MMMM 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    includeSeconds: true,
  });
  // const publishedAtFormat = format(publishedAt, "PPPP");
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toUTCString()}>
          {publishedDateRelative}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a>{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreatedNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={inNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((newComment) => {
          return (
            <Comment
              onDeleteComment={deleteComment}
              key={newComment.content}
              content={newComment}
            />
          );
        })}
      </div>
    </article>
  );
}
