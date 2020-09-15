/*  React components */
import React from "react";

/* Importing own components */
import Header from "./../Header";

/* Importing CSS */
import "./../../App.css";
import "./styles.css";

/* Importing images */
import mailIcon from "./../../images/other/mail_icon.png";
import githubIcon from "./../../images/other/github_icon.png";

/* Viewing and downloading resume component*/
class Resume extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="mainBody">
                    <div className="pageTitle">about me</div>
                    <div className="aboutContainer">
                        <div className="aboutColumn">
                            <div className="aboutHeader">
                                welcome!
                            </div>
                            <div className="aboutText">
                                I’m Lily, a software developer who loves games, both digital and analog.
                                Not only do I like to play them, I also like to make them!
                                I'm a quick learner and can make any role work.
                                In my spare time, I like to draw, learn random science trivia, and assist 
                                others with their math homework and coding projects.
                            </div>
                        </div>
                        <div className="aboutColumn">
                            <div className="aboutImage"/>
                            <div className="aboutHeader">
                                    contact
                            </div>
                            <div className="contactContainer">
                                <img className="contactIcon" src={mailIcon} alt="mail"/>
                                <span className="contactText">lilyhgxiao@gmail.com</span>
                            </div>
                            <div className="contactContainer">
                                <a href="https://github.com/lilyhgxiao" target="_blank" rel="noopener noreferrer">
                                    <img className="contactIcon" src={githubIcon} alt="mail"/>
                                    <span className="contactText">github.com/lilyhgxiao</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;