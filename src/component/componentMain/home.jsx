import React from "react"

export default function Home(props) {
    return (
        <div className="me" id="home" 
            style={{
                backgroundColor: props.checkDarkMood ? "white" : "#000" ,
                color: props.checkDarkMood ? "black" : "white"
            }}
        >
            <div className="info-for-me">
                <h1>I’m Mahdi Abdarrahim <span>Front - End</span> Developer </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
                feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
                <div className="btn">
                    <button>
                        Hire Me 
                        <i className="fa-sharp fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className="image-of-me">
                <img src="./public/20230417_162301.png" alt="" />
            </div>
        </div>
    )
}



