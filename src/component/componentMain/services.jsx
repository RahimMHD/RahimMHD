import React from "react";

export default function Services(props) {

    const sevices = props.serv.map((item,index) => {
        return (
            <div 
                key={index}
                className="serv-box" 
                style={{
                    backgroundColor: props.checkDarkMood ? "white" : "#000" ,
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
            <div className="title-section" style={{color: props.checkDarkMood ? "black" : "white"}} >
                <h1>My Services</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>
            <div className="serv" >
                {sevices}
            </div>
        </div>
    )
}