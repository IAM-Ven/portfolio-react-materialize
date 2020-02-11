import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";

class About extends React.Component {
    componentDidMount() {
        var elem = document.querySelectorAll(".tooltipped");
        M.Tooltip.init(elem, {
            margin: 30,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    render() {
        return (
            <div>
                <ComponentHeader heading={"About"}/>
                <div className="container flow-text about-container">
                    <blockquote className="brown-text">
                        <h2>
                            Passionate software developer wants to work
                            in a team and solve the real world customer problems.
                        </h2>
                    </blockquote>
                    <p>
                        I have over 4 years of experience as a software engineer working in Deep Packet Inspection
                        technologies of the networking domain. Currently, I am pursuing my master's in computer science
                        and I will be graduating in December 2020. I like to build scalable and user-friendly
                        applications using the latest tools and technologies. Apart from building applications,
                        I am always curious and fascinated about problems faced by the application and debugging them
                        in different ways. I am seeking the opportunity to solve challenging tasks and be a
                        part of the team which will improve my knowledge and that will help me in personal
                        and professional growth.
                    </p>
                </div>
            </div>
        )
    }

}

export default About;