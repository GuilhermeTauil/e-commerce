import Link from "next/link";
import React, { Component } from "react";
import styles from "../styles/Home.module.css";

export default class Home_Products extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.card}>
              <Link href="/detalhe">
                <a>
                  <button>
                    <img src="/sandalia.jpg" />
                    Comprar
                  </button>
                </a>
              </Link>
              <p className={styles.price}>$19.99</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <Link href="/detalhe">
                <a>
                  <button>
                    <img src="/sandalia3.jpg" />
                    Comprar
                  </button>
                </a>
              </Link>
              <p className={styles.price}>$19.99</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <Link href="/detalhe">
                <a>
                  <button>
                    <img src="/sandalia3.jpg" />
                    Comprar
                  </button>
                </a>
              </Link>
              <p className={styles.price}>$19.99</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <Link href="/detalhe">
                <a>
                  <button>
                    <img src="/sandalia4.jpg" />
                    Comprar
                  </button>
                </a>
              </Link>
              <p className={styles.price}>$19.99</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <Link href="/detalhe">
                <a>
                  <button>
                    <img src="/sandalia.jpg" />
                    Comprar
                  </button>
                </a>
              </Link>
              <p className={styles.price}>$19.99</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.card}>
              <Link href="/detalhe">
                <a>
                  <button>
                    <img src="/sandalia.jpg" />
                    Comprar
                  </button>
                </a>
              </Link>
              <p className={styles.price}>$19.99</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
