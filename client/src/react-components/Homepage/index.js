/*  React components */
import React from "react";

/* Importing own components */
import Header from "./../Header";
import ProjPreview from "./homepage_previews";

/* Importing CSS */
import "./../../App.css";
import "./styles.css";

/* Importing images */
import flamekeeper from "./../../images/flamekeeper/flamekeeper_preview.png";
import petlabs from "./../../images/petlabs/petlabs_preview.png";

/* Homepage component*/
class Homepage extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="mainBody">
                    <h1>software developer</h1>
                    <div className="projectPrev">
                        <ProjPreview
                            src={flamekeeper}
                            title="flame keeper"
                            link="/flame_keeper"
                        />
                        <ProjPreview
                            src={petlabs}
                            title="petlabs"
                            link="/petlabs"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;