import React from "react";
import Gallery from "react-grid-gallery";
import img1 from "../../../images/odyssey/10.png";
import img2 from "../../../images/odyssey/11.png";
import img3 from "../../../images/odyssey/12.png";

const IMAGES = [
  {
    src: img1,
    thumbnail: img1,
    thumbnailWidth: 500,
    thumbnailHeight: 250,
    caption: "Landing",
  },
  {
    src: img2,
    thumbnail: img2,
    thumbnailWidth: 500,
    thumbnailHeight: 250,
    caption: "Features",
  },
  {
    src: img3,
    thumbnail: img3,
    thumbnailWidth: 500,
    thumbnailHeight: 250,
    caption: "Team",
  },
];

const OdysseyWebGallery = () => {
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

export default OdysseyWebGallery;
