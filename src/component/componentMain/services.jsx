import React from "react";

export default function Services(props) {

    const sevices = props.serv.map((item, index) => {
        return (
            <div
                key={index}
                className="serv-box"
                style={{
                    backgroundColor: props.checkDarkMood ? "white" : "#000",
                    color: props.checkDarkMood ? "black" : "white"
                }}
            >
                <i className={item.icon}></i>
                <h1>{item.name}</h1>
                <p>{item.text}</p>
            </div>
        )
    })

    return (
        <div className="services" id="services">
            <div className="title-section" style={{ color: props.checkDarkMood ? "black" : "white" }} >
                <h1>My Services</h1>
                <p>I will be glad to become a part of your team or just work for you on bug
                    fixing or implementing new features to your website/application.</p>
            </div>
            <div className="serv" >
                {sevices}
            </div>
        </div>
    )
}