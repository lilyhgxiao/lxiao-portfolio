/*  React components */
import React from "react";
import { Link } from 'react-router-dom';

/* Importing CSS */
import "./styles.css";

/* Previewing projects on Homepage */
class ProjLinkRight extends React.Component {
    render() {
        const { img, title, tools, info, link } = this.props;

        return (
            <div className="projLinkContainer">
                <div className="projLinkCell">
                    <div className="projLinkInfo">
                        <div className="projLinkTitle">{title}</div>
                        <div className="projLinkTools">{tools}</div>
                        <div className="projLinkDesc">{info}</div>
                        <Link className="projLink" to={link}>
                            <div className="projLinkText">learn more ></div>
                        </Link>
                    </div>
                </div>
                <div className="projLinkCell">
                    <img className="projLinkImg" src={img} alt={title}/>
                </div>
            </div>
        );
    }
}

export default ProjLinkRight;