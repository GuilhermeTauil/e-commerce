import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
    return (
      <div className={styles.car}>
        <Slider {...settings}>
          <div>
            <Link href="/detalhe">
              <a>
                <img src="/sandalia.jpg" />
                Comprar
              </a>
            </Link>
          </div>
          <div>
            <Link href="/detalhe">
              <a>
                <img src="/sandalia2.jpg" />
                Comprar
              </a>
            </Link>
          </div>
          <div>
            <Link href="/detalhe">
              <a>
                <img src="/sandalia3.jpg" />
                Comprar
              </a>
            </Link>
          </div>
          <div>
            <Link href="/detalhe">
              <a>
                <img src="/sandalia4.jpg" />
                Comprar
              </a>
            </Link>
          </div>
          <div>
            <Link href="/detalhe">
              <a>
                <img src="/sandalia.jpg" />
                Comprar
              </a>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
