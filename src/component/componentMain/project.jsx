import React from "react";


export default function Project(props) {
    return (
        <div id="project">
            <div className="title-section" style={{ color: props.checkcolor ? "black" : "white" }}>
                <h1>Portfolio</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. lorem ipsum</p>
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
                            <img src="./public/web-development.jpg" alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src="./public/web-development.jpg" alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src="./public/web-development.jpg" alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src="./public/web-development.jpg" alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src="./public/web-development.jpg" alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                    <div>
                        <a href="">
                            <img src="./public/web-development.jpg" alt="" />
                        </a>
                        <a href=""><button className="code">Code</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}