import React from "react";
import './sideBarLeft.css'
import Media from './folder data/data.mediaLeft.js'

export default function LeftBar(props) {
    const [icon, setIcon] = React.useState(Media);

    const mediaIcon = icon.Media.map(item => {
        return <li key={item.id}><a href=""><i className={item.icon}></i></a></li>
    })
    const inform = icon.infoPersonal.map((item, index) => {
        return <li key={index}><p>{item.name}:</p> <p>{item.value}</p></li>
    })
    const infoLanguage = icon.infoLang.map((item, index) => {
        return <li key={index}><p>{item.name}:</p> <p>{item.value}</p></li>
    })
    const infoskills = icon.infoSkills.map((item, index) => {
        return <li key={index}><p>{item.name}:</p> <p>{item.value}</p></li>
    })

    return (
        <div
            className="left-bar"
            style={{
                backgroundColor: props.stt ? "white" : "#000",
                color: props.stt ? "black" : "white"
            }}
        >
            <div className="image">
                <img src="./public/20230417_162301.png" alt="" />
            </div>
            <div className="my-info">
                <h1 className="myName">Your Name</h1>
                <h2>Front-End Developer</h2>
            </div>

            <ul className="iconMedia">
                {mediaIcon}
            </ul>


            <ul className="info-personal">
                <h1>My information</h1>
                {inform}
            </ul>

            <h1>Langeages</h1>
            <ul className="range langeages">
                {infoLanguage}
            </ul>

            <h1>Skills</h1>
            <ul className="range skills">
                {infoskills}
            </ul>

            <div className="extra-skills">
                <h1>Extra Skills</h1>
                <div className="list-Extra-skl">
                    <p>Bootstrap, Talwind</p>
                    <p>Saas</p>
                    <p>Gulp, Webpack</p>
                    <p>Git Knowledge</p>
                </div>
            </div>
            <div
                className='dark-mode'
                onClick={props.change}
            >
                {props.stt
                    ? <i className="fa-sharp fa-solid fa-moon"></i>
                    : <i className="fa-regular fa-sun"></i>
                }
            </div>
        </div>
    )
}