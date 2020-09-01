import React from "react";
import Gallery from "react-grid-gallery";
import img1 from "../../../images/kovan/1.png";
import img2 from "../../../images/kovan/2.png";
import img3 from "../../../images/kovan/3.png";
import img4 from "../../../images/kovan/4.png";
import img5 from "../../../images/kovan/5.png";
import img6 from "../../../images/kovan/6.png";
import img7 from "../../../images/kovan/7.png";
import img8 from "../../../images/kovan/8.png";
import img9 from "../../../images/kovan/9.png";

const IMAGES = [
  {
    src: img1,
    thumbnail: img1,
    thumbnailWidth: 150,
    thumbnailHeight: 250,
    caption: "Choose Group",
  },
  {
    src: img2,
    thumbnail: img2,
    thumbnailWidth: 150,
    thumbnailHeight: 250,
    caption: "Choose Plugin",
  },
  {
    src: img4,
    thumbnail: img4,
    thumbnailWidth: 150,
    thumbnailHeight: 250,
    caption: "Cal",
  },
  {
    src: img5,
    thumbnail: img5,
    thumbnailWidth: 150,
    thumbnailHeight: 250,
    caption: "Expense",
  },
  {
    src: img3,
    thumbnail: img3,
    thumbnailWidth: 150,
    thumbnailHeight: 250,
    caption: "Cal Event",
  },
  {
    src: img6,
    thumbnail: img6,
    thumbnailWidth: 150,
    thumbnailHeight: 250,
    caption: "Expense Graph",
  },
  {
    src: img7,
    thumbnail: img7,
    thumbnailWidth: 150,
    thumbnailHeight: 250,
    caption: "Poll",
  },
  {
    src: img8,
    thumbnail: img8,
    thumbnailWidth: 150,
    thumbnailHeight: 250,
    caption: "Grocery",
  },
  {
    src: img9,
    thumbnail: img9,
    thumbnailWidth: 150,
    thumbnailHeight: 250,
    caption: "Map",
  },
];

const KovanGallery = () => {
  return (
    <div
      style={{
        width: "95%",
        height: "100%",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <Gallery images={IMAGES} backdropClosesModal={true} margin={8} />
    </div>
  );
};

export default KovanGallery;
