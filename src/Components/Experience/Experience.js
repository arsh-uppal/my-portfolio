import React from "react";
import "./experience.css";
import ExperienceCard from "./ExperienceCard";
import ChildFriendlyTwoToneIcon from "@material-ui/icons/ChildFriendlyTwoTone";
import SchoolTwoToneIcon from "@material-ui/icons/SchoolTwoTone";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import FlightTakeoffTwoToneIcon from "@material-ui/icons/FlightTakeoffTwoTone";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Footer from "../Footer/Footer";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

export default function Experience() {
  return (
    <div>
      <div className="timelineContainer">
        <div className="experienceContainer">
          <div style={{ height: 80 }}></div>
          <div className="timeline">
            <ExperienceCard
              cardPosition={"container left"}
              title={"Web developer at Rentmoola"}
              icon={
                <WorkTwoToneIcon
                  className="cardIcon"
                  style={{ color: "teal" }}
                />
              }
              year={"2020 - 2023"}
              content={"I currently work here as a developer."}
            />

            <ExperienceCard
              cardPosition={"container right"}
              title={"Full stack web developer at C3D.io"}
              icon={
                <WorkTwoToneIcon
                  className="cardIcon"
                  style={{ color: "teal" }}
                />
              }
              year={"2019 - 2020"}
              content={
                "It was a delight working with the awesome team of C3D.io for almost a year. I was mainly responsible for handling c3d's java version. More details at - https://c3d.io/java."
              }
            />

            <ExperienceCard
              cardPosition={"container left"}
              title={"Post graduation studies"}
              icon={
                <FlightTakeoffTwoToneIcon
                  className="cardIcon"
                  style={{ color: "brown" }}
                />
              }
              year={"2019 - 2020"}
              content={
                "After working as a software engineer for almost three years, I quit my job to pursue an advanced course in mobile and web app development at Langara College."
              }
            />

            <ExperienceCard
              cardPosition={"container right"}
              title={"Started my first job"}
              icon={
                <WorkTwoToneIcon
                  className="cardIcon"
                  style={{ color: "teal" }}
                />
              }
              year={"2015"}
              content={
                "I started my career as a full stack web developer at Cognizant Tech Solutions. At Cognizant, I got a chance to work with some of the biggest clients, such as AT&T, in the communications vertical."
              }
            />
            <ExperienceCard
              cardPosition={"container left"}
              title={"Graduated University"}
              icon={
                <SchoolTwoToneIcon
                  className="cardIcon"
                  style={{ color: "brown" }}
                />
              }
              year={"2011 - 2015"}
              content={
                "I got my first job as software engineer while I was still in the last semester of my undergraduate studies."
              }
            />
            <ExperienceCard
              cardPosition={"container right"}
              title={"Graduated High School"}
              icon={
                <MenuBookIcon className="cardIcon" style={{ color: "brown" }} />
              }
              year={"2011"}
              content={
                "This is also the year in which I started my undergraduate studies with a major in Computer Science."
              }
            />
            <ExperienceCard
              cardPosition={"container left"}
              title={"An awesome baby is born"}
              icon={
                <ChildFriendlyTwoToneIcon
                  className="cardIcon"
                  style={{ color: "deepskyblue" }}
                />
              }
              year={"1992"}
              content={"Born on 17-Nov-1992"}
            />
          </div>
        </div>
        <div style={{ height: 100 }}></div>
      </div>
      <div className="mySkilsContainer">
        <Grid item xs={12} className="mySkilGrid">
          <Chip label="React" color="primary" className="chipStyle" clickable />

          <Chip label="JS" color="primary" className="chipStyle" clickable />
          <Chip
            label="Angular"
            color="primary"
            className="chipStyle"
            clickable
          />
          <Chip label="Java" color="primary" className="chipStyle" clickable />
          <Chip
            label="Spring"
            color="primary"
            className="chipStyle"
            clickable
          />
          <Chip label="MySQL" color="primary" className="chipStyle" clickable />
          <Chip
            label="Oracle"
            color="primary"
            className="chipStyle"
            clickable
          />
          <Chip label="C/C++" color="primary" className="chipStyle" clickable />
          <Chip label="PHP" color="primary" className="chipStyle" clickable />
          <Chip label="REST" color="primary" className="chipStyle" clickable />
          <Chip label="GIT" color="primary" className="chipStyle" clickable />
          <Chip label="Jira" color="primary" className="chipStyle" clickable />
        </Grid>
      </div>
      <Grid item xs={12} className="footer">
        <Footer />
      </Grid>
    </div>
  );
}
