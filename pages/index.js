import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import SimpleSlider from "../components/car";
import Home_Products from '../components/home_products'







export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
        <script src="https://kit.fontawesome.com/ee8d87d35e.js"></script>
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <Logo />
            <Nav />
            <SimpleSlider />
          </div>

          <h2>Sobre nós</h2>
          <div className={styles.loremC}>
            <div className={styles.lorem}>
              <p>
                Ad cillum qui ex nulla officia in eu aliqua nulla proident.
                Aliqua consequat est dolore veniam laboris id. In magna deserunt
                amet do magna irure magna. Mollit esse mollit enim id sint ex et
                esse dolore. Consectetur veniam non Lorem cupidatat labore
                laboris occaecat ipsum nisi duis et excepteur voluptate laboris.
                Elit sint eiusmod anim consequat pariatur dolor ex exercitation.
                Adipisicing excepteur fugiat sit dolore. Aliquip fugiat nisi
                irure velit ea et dolor nostrud adipisicing eu culpa anim anim.
                Aute quis non ut Lorem. Mollit irure deserunt dolore voluptate
                amet voluptate eu ipsum nostrud sint anim et. Velit in aute nt
                consectetur tempor culpa sunt aliquip.
              </p>
            </div>
          </div>
        </div>
        <Home_Products/>
        <footer className={styles.footer}>
          <div className={styles.Midia}>
            <h3>Segue agente</h3>
            <ul>
              <li>
                <a href="">
                  Facebook<i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  instagram<i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.Ajuda}>
            <h3>Mais Ajuda</h3>
            <ul>
              <li>
                <a href="">
                  Quem somos<i className="fas fa-question"></i>
                </a>
              </li>
              <li>
                <a href="">
                  Programa de afiliados<i className="fa fa-fw fa-user"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
