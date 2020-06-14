import React from "react";
import Gallery from "react-grid-gallery";
import img1 from "../../../images/odyssey/1.png";
import img2 from "../../../images/odyssey/2.png";
import img3 from "../../../images/odyssey/3.png";
import img4 from "../../../images/odyssey/4.png";
import img5 from "../../../images/odyssey/5.png";
import img6 from "../../../images/odyssey/6.png";
import img7 from "../../../images/odyssey/7.png";
import img8 from "../../../images/odyssey/8.png";
import img9 from "../../../images/odyssey/9.png";

const IMAGES = [
  {
    src: img1,
    thumbnail: img1,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "Login & Signup",
  },
  {
    src: img2,
    thumbnail: img2,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "Select your country",
  },
  {
    src: img3,
    thumbnail: img3,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "Country success screen",
  },
  {
    src: img4,
    thumbnail: img4,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "Odyssey Dashboard",
  },
  {
    src: img5,
    thumbnail: img5,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "New post popup",
  },
  {
    src: img6,
    thumbnail: img6,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "A timeline",
  },
  {
    src: img7,
    thumbnail: img7,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "Leaderboard",
  },
  {
    src: img8,
    thumbnail: img8,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "VR user flags",
  },
  {
    src: img9,
    thumbnail: img9,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "More VR user flags",
  },
];

const OdysseyGallery = () => {
  return (
    <div
      style={{
        width: "95%",
        height: "100%",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <Gallery images={IMAGES} backdropClosesModal={true} margin={5} />
    </div>
  );
};

export default OdysseyGallery;
