/*  React components */
import React from "react";

/* Importing own components */
import Header from "../Header";
import ProjLinkLeft from "./proj_link_left";
import ProjLinkRight from "./proj_link_right";

/* Importing CSS */
import "./../../App.css";
import "./styles.css";

/* Importing images */
import flamekeeper from "./../../images/flamekeeper/flamekeeper_proj_img.png";
import petlabs from "./../../images/petlabs/petlabs_proj_img.png";

/* Homepage component*/
class Projects extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="mainBody">
                    <div className="pageTitle">projects</div>
                    <div className="projectsContainer">
                        <ProjLinkLeft
                            img={flamekeeper}
                            title="Flame Keeper"
                            tools="C#, Unity, Blender, Maya"
                            info="A 3D PC puzzle platformer where you command magic flames to activate the environment."
                            link="/flame_keeper"
                        />
                        <ProjLinkRight
                            img={petlabs}
                            title="PetLabs"
                            tools="Javascript, React, Express, Mongoose, Heroku, Photoshop"
                            info="A virtual pet care web application."
                            link="/petlabs"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;