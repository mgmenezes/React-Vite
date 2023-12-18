import styles from "./Header.module.css";

import igniteLogo from "../img/logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logotip" />
      Feed Timeline
    </header>
  );
}
