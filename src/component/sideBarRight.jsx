import React from 'react';
import './sideBarRight.css'
import Icons from './folder data/data.Right'
import Scroll, { Link } from 'react-scroll'

export default function RightBar(props) {
    const [iconSection, setIconSection] = React.useState(Icons)
    const [click, setClick] = React.useState(false)
    
    
    const choseSection = iconSection.map((item, index) => {
        return ( <li 
            key={index}
            style={{backgroundColor: props.stt ? "#eee" : "#999"}}
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
        <div className='right-bar' style={{backgroundColor: props.stt ? "white" : "#000"}}>
            <div id='personal'>
                <div className="image">
                    <img src="./public/20230417_162301.png" alt="" />
                </div>
                <div className="my-info" style={{color: props.stt ? "black" : "white"}}>
                    <h1 className="myName">Mahdi AbdArrahim</h1>
                    <h2>Front-End Developer</h2>
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
            <ul className={click ? 'chose-section action': 'chose-section'}>
                {choseSection}
            </ul>
        </div>
    )
}