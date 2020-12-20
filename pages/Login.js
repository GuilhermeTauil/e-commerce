import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Modal() {
  return (
    <form className={styles.Modal_content}>
      <div className={styles.imgcontainer}></div>

      <div className={styles.container_2}>
        <label for="uname">
          <b>Usuário</b>
        </label>
        <input
          type="text"
          placeholder="Digite seu usuário"
          name="uname"
          required
        />

        <label for="psw">
          <b>Senha</b>
        </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          name="psw"
          required
        />
        <span className={styles.span}>
          <Link href='/cadastrar'>
            <a>Cadastre-se</a>
          </Link>
        </span>

        <button className={styles.Login} type="submit">
          Login
        </button>
      </div>

      <div className={styles.container_2}>
        <Link href="/">
          <button type="button" className={styles.cancelbtn}>
            Cancel
          </button>
        </Link>
        <span className={styles.psw}>
          Esqueceu a senha?<a href="/reset-psw">Clique aqui!</a>
        </span>
      </div>
    </form>
  );
}
