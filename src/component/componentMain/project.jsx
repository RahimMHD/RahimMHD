import React from "react";
import imgProject from "../../assets/web-development.jpg"


export default function Project(props) {
    return (
        <div id="project">
            <div className="title-section" style={{ color: props.checkcolor ? "black" : "white" }}>
                <h1>Portfolio</h1>
                <p>Her you can se my best project, I do few dashbord and a lot of Templates,
                    I hope you like it thanks </p>
            </div>
            <div className="project">
                <div className="filter" style={{ color: props.checkcolor ? "black" : "white" }}>
                    <p>All categories</p>
                    <p>UI Design</p>
                    <p>Web Templates</p>
                    <p>Logo</p>
                    <p>Branding</p>
                </div>
                <div className="prj">
                    <div>
                        <a href="">
                            <img src={imgProject} alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src={imgProject} alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src={imgProject} alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src={imgProject} alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src={imgProject} alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src={imgProject} alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}