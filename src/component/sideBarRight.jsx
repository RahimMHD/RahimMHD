import React from 'react';
import './sideBarRight.css'
import Icons from './folder data/data.Right'
import Scroll, { Link } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux';
import { changeModeOn, changeModeOff } from './componentMain/store/store';
import { useState } from 'react';

export default function RightBar(props) {
    const [iconSection, setIconSection] = useState(Icons)
    const [click, setClick] = useState(false)

    const dispatch = useDispatch();
    const {mode} = useSelector(state => state.darkMode);
    console.log(changeModeOn())
    const handelClickMode = () => {
        console.log(mode)
        if (mode) {
            dispatch(changeModeOff())
        } else {
            dispatch(changeModeOn())
        }
    }
    
    const choseSection = iconSection.map((item, index) => {
        return ( <li 
            key={index}
            style={{backgroundColor: mode ? "#eee" : "#999"}}
            > 
                <Link
                    to={item.link} spy={true} smooth={true} offset={0} duration={400}
                ><i 
                    className={item.classname}
                ></i>
                </Link>
            </li>
        )
    })
    return (
        <div className='right-bar' style={{backgroundColor: mode ? "white" : "#000"}}>
            {/* <div id='personal'>
                <div className="image">
                    <img src="./public/20230417_162301.png" alt="" />
                </div>
                <div className="my-info" style={{color: mode ? "black" : "white"}}>
                    <h1 className="myName">Mahdi AbdArrahim</h1>
                    <h2>Front-End Developer</h2>
                </div>
            </div> */}

            <div 
                className='dark-mode' 
                onClick={() => handelClickMode()}
            >
                {mode
                    ? <i className="fa-sharp fa-solid fa-moon"></i> 
                    : <i className="fa-regular fa-sun"></i>
                }
            </div>
            <ul className={click ? 'chose-section action': 'chose-section'}>
                {choseSection}
            </ul>
        </div>
    )
}