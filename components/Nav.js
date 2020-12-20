import styles from "../styles/Home.module.css";
import Link from "next/link";
import Modal from "../pages/Login";

export default function Nav() {
  <Modal />;
  function modall() {
    var modal = document.getElementsByClassName("Modal_content");
    modal.style.display = "block";
  }

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/Loja">
        <a>Loja</a>
      </Link>
      <Link href="/Contato">
        <a>Contato</a>
      </Link>
      <Link href='/Login'>
        <a>Login</a>
      </Link>
    </div>
  );
}
