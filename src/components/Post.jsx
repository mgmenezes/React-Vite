import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/mgmenezes.png"
            alt="avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Moisés Menezes</strong>
            <span>Developer</span>
          </div>
        </div>
        <time title="12 de maio as 8:03" dateTime="2023-12-19 8:00:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa.</p>É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
          <p>
            👉 <a href=""> jane.design/doctorcare</a>
          </p>
          <p>
            <a href="">#rocketseat #novoprojeto #nlw</a>
          </p>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
