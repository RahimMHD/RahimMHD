import React from "react";

export default function Plans(props) {

    const price = props.plan.map((item,index) => {
        return (
            <div 
                className="plans" 
                key={index}
                style={{
                    backgroundColor: props.checkDarkMood ? "white" : "#000" ,
                    color: props.checkDarkMood ? "black" : "white"
                }}
            >
                <h2>{item.name}</h2>
                <div className="price"><h1>{item.pric}.00$ </h1><p>/Hour</p></div>
                <p>{item.text}</p>
                <ul>
                    {item.work.map((obj,index) => {
                        return (
                            <li key={index}> <i 
                                style={{color: obj.check ? "#FFB400" : "#eee"}}
                                className={obj.check ? "fa-solid fa-check" : "fa-solid fa-xmark"}
                            ></i>
                                {obj.value}
                            </li>
                        )
                    }) }
                </ul>
                <div className="order-btn">
                    <button>ORDER NOW</button>
                </div>
            </div>
        )
    })

    return (
        <div id="plans">
            <div className="title-section" style={{color: props.checkDarkMood ? "black" : "white"}}>
                <h1>Price Plans</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>
            <div className="plans-price" >
                {price}
            </div>
        </div>
    )
}