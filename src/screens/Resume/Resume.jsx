// src/screens/Resume/Resume.jsx

import React, { useState, useEffect } from "react";
import ScreenHeading from "../../components/Common/ScreenHeading/ScreenHeading";
import ScrollService from "../../services/ScrollService";
import AnimationService from "../../services/AnimationService";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    AnimationService.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE COMPONENT */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : null}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* RESUME BULLETS */
  const resumeBullets = [
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Flutter", ratingPercentage: 85 },
    { skill: "Dart", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React", ratingPercentage: 70 },
    { skill: "Node.js", ratingPercentage: 65 },
    { skill: "Firebase / Supabase", ratingPercentage: 70 },
    { skill: "AWS (Lambda, S3)", ratingPercentage: 65 },
    { skill: "CI/CD & Kubernetes", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2024", toDate: "2025" },
      description: "Developed a cross-platform personal portfolio website showcasing skills and projects.",
      subHeading: "Technologies Used: React.js, TailwindCSS, EmailJS",
    },
    {
      title: "Cross-Platform Chat App",
      duration: { fromDate: "2022", toDate: "2023" },
      description: "Built a real-time chat application with OAuth authentication and push notifications.",
      subHeading: "Technologies Used: Flutter, Firebase, Node.js",
    },
    {
      title: "Cloud Deployment Automation",
      duration: { fromDate: "2023", toDate: "2024" },
      description: "Implemented serverless deployment pipelines and Kubernetes automation for internal tools.",
      subHeading: "Technologies Used: AWS Lambda, Docker, Kubernetes",
    },
  ];

  const resumeDetails = [
    /* WORK HISTORY */
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"AIDEON LIMITED"}
        subHeading={"Software Engineer 2 (Full Stack Flutter, React.js, Node.js Developer)"}
        fromDate={"Dec 2023"}
        toDate={"Present"}
        description={
          "Designing and developing full-stack web and mobile applications using Flutter, React.js, and Node.js. Building scalable APIs, cloud-native microservices, and automating CI/CD deployment workflows with Kubernetes and Docker."
        }
      />
      <ResumeHeading
        heading={"EGuidance Labs LLP"}
        subHeading={"Flutter Developer"}
        fromDate={"Jun 2021"}
        toDate={"Jun 2022"}
        description={
          "Developed scalable Flutter applications integrated with backend APIs, optimized API performance by 30%, and implemented OAuth-based authentication systems."
        }
      />
      <ResumeHeading
        heading={"Spanlecs Services"}
        subHeading={"Flutter Developer Associate"}
        fromDate={"Sep 2020"}
        toDate={"Jun 2021"}
        description={
          "Worked on serverless architectures, implemented real-time monitoring with Prometheus, and developed cross-platform mobile apps using Flutter and Firebase."
        }
      />
    </div>,
  
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Roehampton, London"}
        subHeading={"MSc Web Development"}
        fromDate={"2022"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"North East Frontier Technical University, India"}
        subHeading={"B.Tech Computer Science and Engineering"}
        fromDate={"2016"}
        toDate={"2020"}
      />
    </div>,
  
    /* PROGRAMMING SKILLS */
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
  
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
  
    /* INTERESTS */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Love mentoring juniors and sharing my coding knowledge to uplift new developers."
      />
      <ResumeHeading
        heading="Music"
        description="Enjoy playing musical instruments and exploring different genres of music."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="Passionate about competitive gaming; helps improve reflexes and strategic thinking."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    const offsetHeight = 360;
    const newCarousalOffset = {
      style: { transform: `translateY(${-offsetHeight * index}px)` },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;