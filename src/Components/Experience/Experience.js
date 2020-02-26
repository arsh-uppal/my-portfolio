import React from 'react';
import './experience.css';
import ExperienceCard from './ExperienceCard';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import FlightTakeoffTwoToneIcon from '@material-ui/icons/FlightTakeoffTwoTone';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Footer from '../Footer/Footer';
import Grid from '@material-ui/core/Grid';

export default function Experience() {
    return (
        <div>
            <div className="timelineContainer">
                <div className="experienceContainer">
                    <div style={{ height: 100 }}></div>
                    <div className="timeline">
                        <ExperienceCard
                            cardPosition={"container right"}
                            title={"Full Stack web developer at C3D.io"}
                            icon={<WorkTwoToneIcon className="cardIcon"
                                style={{ color: "teal" }} />}
                            year={"2019 - present"}
                            content={"I am currently working par-time at C3D as a software develper."}
                        />

                        <ExperienceCard
                            cardPosition={"container left"}
                            title={"Post Graduation studies"}
                            icon={<FlightTakeoffTwoToneIcon className="cardIcon" style={{ color: "brown" }} />}
                            year={"2019 - present"}
                            content={"After working as a software engineer for almost three years, I quit my job to pursue an advanced course in mobile and web app development at Langara College."}
                        />

                        <ExperienceCard
                            cardPosition={"container right"}
                            title={"Started my first job"}
                            icon={<WorkTwoToneIcon className="cardIcon" style={{ color: "teal" }} />}
                            year={"2015"}
                            content={"I started my career as a full stack web developer at Cognizant Tech Solutions. At Cognizant, I got a chance to work with some of the biggest clients, such as AT&T, in the communications vertical."}
                        />
                        <ExperienceCard
                            cardPosition={"container left"}
                            title={"Graduated University"}
                            icon={<SchoolTwoToneIcon className="cardIcon" style={{ color: "brown" }} />}
                            year={"2015"}
                            content={"I got my first job as Software engineer while I was still in the last semester of my undergraduate studies."}
                        />
                        <ExperienceCard
                            cardPosition={"container right"}
                            title={"Graduated High School"}
                            icon={<MenuBookIcon className="cardIcon" style={{ color: "brown" }} />}
                            year={"2011"}
                            content={"This is also the year in which I started my undergraduate studies with a moajor in Computer Science."}
                        />
                        <ExperienceCard
                            cardPosition={"container left"}
                            title={"An awesmoe baby is born"}
                            icon={<ChildFriendlyIcon className="cardIcon" style={{ color: "skyblue" }} />}
                            year={"1992"}
                            content={"Born on 17-Nov-1992"}
                        />
                    </div>
                </div>
            </div>
            <div className="mySkilsContainer">
                <Grid item xs={12}>
                </Grid>
            </div>
            <Grid item xs={12} className="footer">
                <Footer />
            </Grid>
        </div>
    );
}