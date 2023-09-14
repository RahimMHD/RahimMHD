import React from "react";
import './sideBarLeft.css'
import Media from './folder data/data.mediaLeft.js'
import { useSelector, useDispatch } from "react-redux";
import { changeModeOff, changeModeOn } from "./componentMain/store/store";
import imgPrf from "../assets/pngwing.com (9).png"


export default function LeftBar(props) {
    const [icon, setIcon] = React.useState(Media);
    const {mode} = useSelector(state => state.darkMode);

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

    const dispatch = useDispatch();


    const handelChangeMode = () => {
        if (mode) {
            dispatch(changeModeOff())
        } else {
            dispatch(changeModeOn())
        }
    }

    return (
        <div
            className="left-bar"
            style={{
                backgroundColor: mode ? "white" : "#000",
                color: mode ? "black" : "white"
            }}
        >
            <div className="image">
                <img src={imgPrf} alt="" />
            </div>
            <div className="my-info">
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
                onClick={() => handelChangeMode()}    
            >
                {mode
                    ? <i className="fa-sharp fa-solid fa-moon"></i> 
                    : <i className="fa-regular fa-sun"></i>
                }
            </div>
        </div>
    )
}