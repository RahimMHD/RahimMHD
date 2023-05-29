import React from "react"
import imgPrf from "../../assets/clipart132311.png"

export default function Home(props) {
    return (
        <div className="me" id="home"
            style={{
                backgroundColor: props.checkDarkMood ? "white" : "#000",
                color: props.checkDarkMood ? "black" : "white"
            }}
        >
            <div className="info-for-me">
                <h1>Your Name Here <span>Front - End</span> Developer </h1>
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
                <img src={imgPrf} alt="" />
            </div>
        </div>
    )
}



