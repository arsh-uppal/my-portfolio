import React from "react";
import "./experience.css";
import ExperienceCard from "./ExperienceCard";
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
      <div className='timelineContainer'>
        <div className='experienceContainer'>
          <div style={{ height: 80 }}></div>
          <div className='timeline'>
            <ExperienceCard
              cardPosition={"container right"}
              title={"Software developer at Careteam"}
              icon={
                <WorkTwoToneIcon
                  className='cardIcon'
                  style={{ color: "teal" }}
                />
              }
              year={"2023 - present"}
            />

            <ExperienceCard
              cardPosition={"container left"}
              title={"Software developer at Rentmoola"}
              icon={
                <WorkTwoToneIcon
                  className='cardIcon'
                  style={{ color: "teal" }}
                />
              }
              year={"2020 - 2023"}
            />

            <ExperienceCard
              cardPosition={"container right"}
              title={"Software developer at C3D.io"}
              icon={
                <WorkTwoToneIcon
                  className='cardIcon'
                  style={{ color: "teal" }}
                />
              }
              year={"2019 - 2020"}
            />

            <ExperienceCard
              cardPosition={"container left"}
              title={"Post graduation studies"}
              icon={
                <FlightTakeoffTwoToneIcon
                  className='cardIcon'
                  style={{ color: "brown" }}
                />
              }
              year={"2019 - 2020"}
              content={
                "After working as a software developer for nearly three years, I quit my job to pursue an advanced course in mobile and web app development."
              }
            />

            <ExperienceCard
              cardPosition={"container right"}
              title={"Software developer at Cognizant "}
              icon={
                <WorkTwoToneIcon
                  className='cardIcon'
                  style={{ color: "teal" }}
                />
              }
              year={"2015"}
              content={
                "I started my career as a full-stack web developer at Cognizant Technology Solutions. At Cognizant, I had the opportunity to work with major clients, such as AT&T, in the communications sector."
              }
            />
            <ExperienceCard
              cardPosition={"container left"}
              title={"Graduated University"}
              icon={
                <SchoolTwoToneIcon
                  className='cardIcon'
                  style={{ color: "brown" }}
                />
              }
              year={"2011 - 2015"}
              content={
                "I secured my first job as a software engineer while still in the last semester of my undergraduate studies."
              }
            />
            <ExperienceCard
              cardPosition={"container right"}
              title={"Graduated High School"}
              icon={
                <MenuBookIcon className='cardIcon' style={{ color: "brown" }} />
              }
              year={"2011"}
              content={
                "This was also the year I began my undergraduate studies, majoring in Computer Science."
              }
            />
          </div>
        </div>
        <div style={{ height: 100 }}></div>
      </div>
      <div className='mySkilsContainer'>
        <Grid item xs={12} className='mySkilGrid'>
          <Chip label='React' color='primary' className='chipStyle' clickable />

          <Chip label='JS' color='primary' className='chipStyle' clickable />
          <Chip
            label='Angular'
            color='primary'
            className='chipStyle'
            clickable
          />
          <Chip label='Java' color='primary' className='chipStyle' clickable />
          <Chip
            label='Spring'
            color='primary'
            className='chipStyle'
            clickable
          />
          <Chip label='MySQL' color='primary' className='chipStyle' clickable />
          <Chip
            label='Oracle'
            color='primary'
            className='chipStyle'
            clickable
          />
          <Chip label='C/C++' color='primary' className='chipStyle' clickable />
          <Chip label='PHP' color='primary' className='chipStyle' clickable />
          <Chip label='REST' color='primary' className='chipStyle' clickable />
          <Chip label='GIT' color='primary' className='chipStyle' clickable />
          <Chip label='Jira' color='primary' className='chipStyle' clickable />
        </Grid>
      </div>
      <Grid item xs={12} className='footer'>
        <Footer />
      </Grid>
    </div>
  );
}
