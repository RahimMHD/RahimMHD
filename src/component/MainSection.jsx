import React from "react";
import './MainSection.css'
import Main from './componentMain/maindata'
import Home from "./componentMain/home"
import Services from "./componentMain/services"
import Plans from "./componentMain/plans"
import Project from './componentMain/project'
import Contact from './componentMain/contact'
import { useSelector } from "react-redux";

export default function MainSection(props) {
    const [plans, setPlans] = React.useState(Main);
    const {mode} = useSelector(state => state.darkMode);

    return (
        <div className="main-section">

            <Home checkDarkMood={mode} />
            <Services serv={plans[1]} checkDarkMood={mode} />
            <Plans checkDarkMood={mode} plan={plans[0]} />
            <Project checkcolor={mode} />
            <Contact mode={mode} />

            <footer>
                <h2>--THANK YOU--</h2>
            </footer>
        </div>
    )
}