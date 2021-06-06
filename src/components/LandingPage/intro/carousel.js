import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import building1 from "../../../assets/Intro Carousel/img1.jpg";
import building2 from "../../../assets/Intro Carousel/img2.jpg";
import building3 from "../../../assets/Intro Carousel/img3.jpg";
import building4 from "../../../assets/Intro Carousel/img4.jpg";
import building5 from "../../../assets/Intro Carousel/img5.jpg";
import building6 from "../../../assets/Intro Carousel/img6.jpg";
import building7 from "../../../assets/Intro Carousel/img7.jpg";

const images = [
  {
    src: building1,
    key: 1,
  },
  {
    src: building2,
    key: 2,
  },
  {
    src: building3,
    key: 3,
  },
  {
    src: building4,
    key: 4,
  },
  {
    src: building5,
    key: 5,
  },
  {
    src: building6,
    key: 6,
  },
  {
    src: building7,
    key: 7,
  },
];

const caroursel = () => <UncontrolledCarousel autoPlay={true} interval={5000} items={images} />;

export default caroursel;
