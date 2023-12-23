import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function SideBar() {
  const profileImage =
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={profileImage} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/mgmenezes.png" />

        <strong>Moisés</strong>
        <span>Sofware Engineer</span>
      </div>

      <footer className={styles.footer}>
        <a href="http://">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
