import React from "react";
import './MainSection.css'
import Main from './componentMain/maindata'
import Home from "./componentMain/home"
import Services from "./componentMain/services"
import Plans from "./componentMain/plans"
import Project from './componentMain/project'
import Contact from './componentMain/contact'

export default function MainSection(props) {
    const [plans, setPlans] = React.useState(Main);

    return (
        <div className="main-section">

            <Home checkDarkMood={props.stt} />
            <Services serv={plans[1]} checkDarkMood={props.stt} />
            <Plans checkDarkMood={props.stt} plan={plans[0]} />
            <Project checkcolor={props.stt} />
            <Contact mode={props.stt} />

            <footer>
                <h2>--THANK YOU--</h2>
            </footer>
        </div>
    )
}