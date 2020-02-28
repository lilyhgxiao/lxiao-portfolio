/*  React components */
import React from "react";
import { Link } from 'react-router-dom';

/* Importing CSS */
import "./styles.css";

/* Previewing projects on Homepage */
class ProjPreview extends React.Component {
    render() {
        const { src, title, link } = this.props;

        return (
            <div className="prevContainer">
                <Link to={link}>
                    <input
                        className="prevImage"
                        type='image'
                        src={src}
                        alt={title}
                    />
                    <div class="prevOverlay">
                        <div class="prevText">{title}</div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ProjPreview;