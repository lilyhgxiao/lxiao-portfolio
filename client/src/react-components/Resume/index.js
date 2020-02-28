/*  React components */
import React from "react";

/* Importing own components */
import Header from "./../Header";

/* Importing CSS */
import "./../../App.css";
import "./styles.css";

/* Importing images */
import resume from "./../../images/other/Lily Xiao.pdf";

/* Viewing and downloading resume component*/
class Resume extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="mainBody">
                    <div className="pageTitle">resume</div>
                    <embed src={resume} width="100%" height="1150"/>
                </div>
            </div>
        );
    }
}

export default Resume;