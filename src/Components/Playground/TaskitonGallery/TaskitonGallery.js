import React from "react";
import Gallery from "react-grid-gallery";
import img1 from "../../../images/taskiton/1.png";
import img2 from "../../../images/taskiton/2.png";
import img3 from "../../../images/taskiton/3.png";
import img4 from "../../../images/taskiton/4.png";
import img5 from "../../../images/taskiton/5.png";
import img6 from "../../../images/taskiton/6.png";

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
    caption: "Create Account",
  },
  {
    src: img4,
    thumbnail: img4,
    thumbnailWidth: 500,
    thumbnailHeight: 250,
    caption: "Dashboard",
  },
  {
    src: img5,
    thumbnail: img5,
    thumbnailWidth: 180,
    thumbnailHeight: 250,
    caption: "Chat",
  },
  {
    src: img3,
    thumbnail: img3,
    thumbnailWidth: 500,
    thumbnailHeight: 250,
    caption: "Analytics",
  },
  {
    src: img6,
    thumbnail: img6,
    thumbnailWidth: 500,
    thumbnailHeight: 250,
    caption: "Kanban board",
  },
];

const TaskitonGallery = () => {
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

export default TaskitonGallery;
