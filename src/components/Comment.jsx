import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/mgmenezes.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Moisés Menezes</strong>
              <time title="12 de maio as 8:03" dateTime="2023-12-19 8:00:00">
                Cerca de 1h atras
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom devon</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir
            <span>5</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
