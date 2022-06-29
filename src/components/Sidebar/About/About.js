import React from "react";
import "./About.css"

export default function About(){
    return (
        <div className="about-container">
            <p className="about-text">
                A Youtube clone made with React.
            </p>
            <p className="about-text">
                The end goal is to get a somewhat close copy 
                to the real thing.
            </p>
            <p className="about-text">
                 Sometime in the future i will include individual pages per video with the use of Express?
            </p>
            <p className="about-text">
                Might transfer the Mock data to an backend with the use of mongodb?
            </p>
            <p className="about-text">
                First save: 6/25/2022 created basic UI | Created Mock data | Videos play on mouseEnter 
            </p>
            <p className="about-text">
                Second save: 6/26/2022 added an "ok" search feature | created youtube search result card | attempting to figure out how to route |
                to be able to search for now you must add /search to the end of the url
            </p>
            <p className="about-text">
                Third save: 6/27/2022 used conditional rendering to show search result component
            </p>
            <p className="about-text">
                4th save: 6/29/2022 changed scrollbar styles | added onclick to show more playlist and show more subscribers 
            </p>
            <a className="git-link" href="https://github.com/woodshyJean">
                <p className="about-text git-link">
                By: Woodshy Jean
                </p>
            </a>
        </div>
    )
}
