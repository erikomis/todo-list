import React from "react";
import logo from "../../Logo.png";
import styles from "./Header.module.css";


export function Header() {
  return (
    <header className={styles["header"]}>
      <div>
        <img src={logo} alt="tudo-list" />
      </div>
    </header>
  );
}
