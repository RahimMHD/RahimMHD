
import React from "react";

export default function Contact(props) {
    return (
        <div className="contact" id="contact">
            <div className="send-message" >
                <h1 style={{ color: props.mode ? "black" : "white" }}>Leave Us Your Info</h1 >
                <form action="" style={{
                    backgroundColor: props.mode ? "white" : "#000",
                    color: props.mode ? "black" : "white"
                }}>
                    <label htmlFor="Fullname">Your Full Name (Required)</label>
                    <input
                        type="text"
                        name="Fullname" required
                        style={{ backgroundColor: props.mode ? "#eee" : "#999" }} />
                    <br />
                    <label htmlFor="yourEmail">Your Email (Required)</label>
                    <input type="email" name="yourEmail" style={{ backgroundColor: props.mode ? "#eee" : "#999" }} />
                    <br />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" style={{ backgroundColor: props.mode ? "#eee" : "#999" }} />
                    <br />
                    <label htmlFor="message">Your Email (Required)</label>
                    <textarea
                        name="message"
                        id="tourMessage"
                        cols="30"
                        rows="10"
                        style={{ backgroundColor: props.mode ? "#eee" : "#999" }}></textarea>
                    <input type="submit" value="SEND MESSAGE" />
                </form>
            </div>
            <div className="my-contact">
                <h1 style={{ color: props.mode ? "black" : "white" }}>Contact Information</h1>
                <div className="box-contact" style={{
                    backgroundColor: props.mode ? "white" : "#000",
                    color: props.mode ? "black" : "white"
                }}>
                    <i className="fa-solid fa-address-book"></i>
                    <div>
                        <p>Country:</p>
                        <p>USA</p>
                    </div>
                    <div>
                        <p>City:</p>
                        <p>New York</p>
                    </div>
                    <div>
                        <p>Street</p>
                        <p>Your street</p>
                    </div>
                </div>
                <div className="box-contact" style={{
                    backgroundColor: props.mode ? "white" : "#000",
                    color: props.mode ? "black" : "white"
                }}>
                    <i className="fa-solid fa-id-card"></i>
                    <div>
                        <p>Email::</p>
                        <p>youremail@gmail.com</p>
                    </div>
                    <div>
                        <p>G Meet</p>
                        <p>@nameMeet</p>
                    </div>
                    <div>
                        <p>Telegram</p>
                        <p>@yourTelegram</p>
                    </div>
                </div>
                <div className="box-contact" style={{
                    backgroundColor: props.mode ? "white" : "#000",
                    color: props.mode ? "black" : "white"
                }}>
                    <i className="fa-solid fa-comment"></i>
                    <div>
                        <p>Support services:</p>
                        <p>15369</p>
                    </div>
                    <div>
                        <p>Office:</p>
                        <p>+58 (021)356 587 235</p>
                    </div>
                    <div>
                        <p>Personal:</p>
                        <p>+58 (021)356 587 235</p>
                    </div>
                </div>
            </div>
        </div>
    )
}