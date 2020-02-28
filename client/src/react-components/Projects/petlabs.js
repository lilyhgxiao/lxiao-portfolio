/*  React components */
import React from "react";

/* Importing own components */
import Header from "../Header";

/* Importing CSS */
import "./../../App.css";
import "./styles.css";

/* Importing images */
import petlabs_login from "./../../images/petlabs/petlabs_scrn_1.png";
import petlabs_admin_dash from "./../../images/petlabs/petlabs_scrn_2.png";
import petlabs_admin_pettype from "./../../images/petlabs/petlabs_scrn_3.png";
import petlabs_user_dash from "./../../images/petlabs/petlabs_scrn_4.png";
import petlabs_care from "./../../images/petlabs/petlabs_scrn_5.png";

/* Homepage component*/
class ProjectPetLabs extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="mainBody">
                    <div className="pageTitle">petlabs</div>
                    <div className="projPageText">
                        PetLabs is a virtual pet care web application developed using React. 
                        Care for your pets by feeding and playing with them. Playing grants you 
                        gold, which you can use to either buy new pets or items. Make sure to 
                        not let your pets get too hungry or unhappy.
                    </div>
                    <div className="projPageText">
                        PetLabs supports admin access, where admins can change user details. They can 
                        also change pet type/item parameters, and create new pet types/items.
                    </div>
                    <img className="projMainImg" src={petlabs_care} alt="PetLabs Pet Care Page"/>
                    <br/>
                    <form className="projButtons" action="https://evening-beyond-09613.herokuapp.com/login" target="_blank">
                        <input className="projLinkButton" type="submit" value="Check out PetLabs" />
                    </form> 
                    <div className="projPageText">
                        <ul>
                            <li><b>Tools:</b> Javascript, React, Express, Mongoose, Heroku, Photoshop</li>
                        </ul>
                        PetLabs was my first web app, a project completed for CSC309: Programming on the Web  
                        at University of Toronto. It was created by a team of 3 programmers. The team liked 
                        games and opted to create a game-like web app that would fulfill the conditions of the
                        project. Design and development and testing was completed in 2 months. As a 
                        programmer on the team, my contributions include:
                        <ul>
                            <li>
                                <b>Documentation:</b> Creating a 7-page project proposal and design document 
                                to detail all features and view sketches.
                            </li>
                            <li>
                                <b>Common Components:</b> Implemented the sidebar for both user and admin views, and 
                                implemented the gold display.
                            </li>
                            <li>
                                <b>Login/Signup:</b> Implemented the Login and Signup pages, as well as the changes needed 
                                to create new users in the database. Included hashing of passwords: checking when the user 
                                logs in, and creation when new user is created.
                            </li>
                            <li>
                                <b>Dashboard:</b> Implemented the User Dashboard, which needed to retrieve the correct pet 
                                data for the logged-in user, and display the list.
                            </li>
                            <li>
                                <b>New Pet Page:</b> Implemented the Create New Pet page, which allowed the user to add a new pet 
                                given they had enough gold.
                            </li>
                            <li>
                                <b>Settings:</b> Implemented the Settings page, which allowed the user to change their password. 
                                Included the hashing of passwords to check the old password entered, and creation when the password 
                                is changed.
                            </li>
                            <li>
                                <b>Deletion:</b> Implemented the Create New Pet page, which allowed the user to add a new pet 
                                given they had enough gold.
                            </li>
                            <li>
                                <b>Statezero:</b> Added Statezero to all views in preparation to implement AJAX, adjusting other
                                views to work with it, and made sure views still worked as expected even with the change.
                            </li>
                            <li>
                                <b>Express, API calls:</b> Wrote API calls to retrieve from and write data to the Mongoose 
                                database and to add user data to the cookie. Specifically, I wrote API calls to add info 
                                on users logged in to the cookie, and calls to add, remove, and change pet and user data.
                            </li>
                            <li>
                                <b>AJAX:</b> Connected the frontend to the backend by using AJAX. Wrote fetch calls for common data
                                changes for users and pets, which were used throughout all the user views. Used together with Statezero 
                                to make sure frontend and backend always reflected each other.
                            </li>
                            <li>
                                <b>Redirection:</b> Implemented the redirection to the current page when the page is refreshed, given cookie 
                                data.
                            </li>
                            <li>
                                <b>CSS:</b> Wrote unique CSS styling without any libraries for the entire app, both user and admin 
                                views. I went for a clean but fun style to reflect the fun aspect of the web app.
                            </li>
                            <li>
                                <b>Visuals:</b> Provided all handdrawn images. Drew all of the pets and their different sprites and 
                                designed the logo. Provided all rough sketches for the proposal and documentation phases.
                            </li>
                        </ul>
                    </div>
                    <img className="projScreenshotPL" src={petlabs_login} alt="PetLabs Login Page" />
                    <img className="projScreenshotPL" src={petlabs_user_dash} alt="PetLabs User Dashboard Page" />
                    <img className="projScreenshotPL" src={petlabs_admin_dash} alt="PetLabs Admin Dashboard Page" />
                    <img className="projScreenshotPL" src={petlabs_admin_pettype} alt="PetLabs Admin PetType Page" />
                </div>
            </div>
        );
    }
}


export default ProjectPetLabs;