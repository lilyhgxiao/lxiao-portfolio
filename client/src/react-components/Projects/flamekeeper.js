/*  React components */
import React from "react";

/* Importing own components */
import Header from "../Header";

/* Importing CSS */
import "./../../App.css";
import "./styles.css";

/* Importing images */
import flamekeeper_start from "./../../images/flamekeeper/flamekeeper_scrn_1.png";
import flamekeeper_tutorial from "./../../images/flamekeeper/flamekeeper_scrn_2.png";
import flamekeeper_lvl_1 from "./../../images/flamekeeper/flamekeeper_scrn_3.png";
import flamekeeper_lvl_2 from "./../../images/flamekeeper/flamekeeper_scrn_4.png";
import flamekeeper_lvl_3 from "./../../images/flamekeeper/flamekeeper_scrn_5.png";
import flamekeeper_lvl_4 from "./../../images/flamekeeper/flamekeeper_scrn_6.png";

/* Importing download files */
import flamekeeper_dl from "./../../downloads/Flame Keeper Windows x86.zip"
import flamekeeper_64_dl from "./../../downloads/Flame Keeper Windows x86 64.zip"
import flamekeeper_mac_dl from "./../../downloads/Flame Keeper Mac.app.zip"

/* Homepage component*/
class ProjectFlameKeeper extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="mainBody">
                    <div className="pageTitle">flame keeper</div>
                    <div className="projPageText">
                        Flame Keeper is a 3D PC puzzle platformer developed in Unity. 
                        Your goal is to reach the end of the level using a magic lantern 
                        that can power all sorts of devices placed throughout the level 
                        using flames. The magic lantern has limited uses and can take back 
                        flames from devices, so the player must decide when and where to 
                        use the flames to solve the puzzles.
                    </div>
                    <iframe 
                        className="projVideo"
                        title="Flame Keeper Trailer"
                        width="900"
                        align="middle"
                        height="500" 
                        src="https://www.youtube.com/embed/tFeF3q_Sl2I" 
                        frameborder="0" 
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    <br/>
                    <div className="projButtons">
                        <a download="Flame Keeper Windows x86.zip" href={flamekeeper_dl}>
                            <button className="projLinkButton">Download for Windows</button>
                        </a>
                        <a download="Flame Keeper Windows x86 64.zip" href={flamekeeper_64_dl}>
                            <button className="projLinkButton">Download for Windows 64</button>
                        </a>
                        <a download="Flame Keeper Windows Mac.app.zip" href={flamekeeper_mac_dl}>
                            <button className="projLinkButton">Download for Mac</button>
                        </a>
                    </div>
                    <div className="projPageText">
                        <ul>
                            <li><b>Platform:</b> Windows</li>
                            <li><b>Tools:</b> C#, Unity3D, Blender, Maya</li>
                        </ul>
                        Flame Keeper was my first completed game, a project completed for CSC404: Video Game 
                        Design at University of Toronto. It was created by a team of 8:
                        3 programmers, 4 artists, and 1 musician. Design, development 
                        and testing was completed in 3 months, and the result was presented
                        at the 2019 Level Up showcase in Toronto. As a programmer on the
                        team, my contributions include:
                        <ul>
                            <li>
                                <b>Documentation:</b> Creating a 21-page design document to detail all aspects 
                                of game design: gameplay, character/environtment/level designs, 
                                sounds, flow diagrams, and a development timelime.
                            </li>
                            <li>
                                <b>Level design:</b> Specfically, designing the tutorial level and Level 2. 
                                In particular, the tutorial level took into account the main controls 
                                the player needed to learn and the most natural way to introduce them. 
                                On the other hand, Level 2 includes less straightforward puzzles 
                                to challenge the player as they become more used to the concept 
                                of using their flames.
                            </li>
                            <li>
                                <b>Level creation:</b> Most levels were modelled by an artist on the team based on 
                                the level sketches, but as I completed game scripts on the levels, they 
                                would often need adjustments to the sizes and placements of the objects. I also 
                                created Level 3 using the 3d objects used in past levels. In addition 
                                to that, I chose and applied all of the colours to all 3d objects besides 
                                the player model. Cool colours were used to create the feeling of darkness 
                                without actual darkness.
                            </li>
                            <li>
                                <b>Game scripting of all levels:</b> Placement of key objects for puzzles and 
                                attaching the appropriate C# scripts, and adjusting parameters. 
                            </li>
                            <li>
                                <b>C# scripts:</b> Writing scripts for object behaviour. In particular, I 
                                designed and implemented the burn feature (Burnable/Burner objects), and made 
                                adjustments to most other scripts. For example, although this feature was 
                                eventually removed, I added the feature for switches to accept multiple charges, 
                                so adding more charges would have a more pronounced effect. 
                            </li>
                            <li>
                                <b>Cutscenes:</b> Flame Keeper is a game that heavily depends on its aesthetics and
                                beautiful environment, so it was important to create cutscenes to help highlight this. 
                                I designed and created all cutscenes in the game using Cinemachine, as well as wrote 
                                scripts to create animation/timeline controllers to play these cutscenes. Since the 
                                cutscenes are also rather lengthy, I also added the option for the programmers to turn 
                                them off in order to streamline development.
                            </li>
                            <li>
                                <b>Playtesting:</b> Demos were held to get feedback and improve the user experience. I 
                                transcribed the results into a compilation and wrote an analysis of the main problems, 
                                resulting in a smoother process at a meeting where we determined their severity and 
                                solutions. From this, significant improvements such as the ability to rotate the camera 
                                came to be.
                            </li>
                        </ul>
                    </div>
                    <img className="projScreenshotFK" src={flamekeeper_start} alt="Flame Keeper Start Screen"/>
                    <img className="projScreenshotFK" src={flamekeeper_tutorial} alt="Flame Keeper Tutorial"/>
                    <img className="projScreenshotFK" src={flamekeeper_lvl_1} alt="Flame Keeper Level 1"/>
                    <img className="projScreenshotFK" src={flamekeeper_lvl_2} alt="Flame Keeper Level 2"/>
                    <img className="projScreenshotFK" src={flamekeeper_lvl_3} alt="Flame Keeper Level 3"/>
                    <img className="projScreenshotFK" src={flamekeeper_lvl_4} alt="Flame Keeper Level 4"/>
                </div>
            </div>
        );
    }
}


export default ProjectFlameKeeper;