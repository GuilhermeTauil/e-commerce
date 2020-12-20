import { Component } from "react";
import { render } from "react-dom";
import Logo from "../components/Logo";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Loja() {
  return (
    <div className={styles.Main_loja}>
      <Logo />
      <div className={styles.input_loja}>
        <input placeholder="Oque procura?"/><button><i>procurar</i></button>
      </div>
    </div>
  );
}
