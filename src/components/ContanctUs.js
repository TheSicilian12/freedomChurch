import { useState } from "react";

export function ContanctUs() {
    const [firstName, setFirstName] = useState("first");
    const [lastName, setLastName] = useState("last");
    const [email, setEmail] = useState("email");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        console.log("send message")
    }


    return (
        <>
            <div className="contact-container input-label">
                <div>Name</div>
                <div className="contact-name-fields">
                    <input
                        className="contact-input-small contact-input"
                        type="text"
                        // value={firstName}
                        // placeholder={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}></input>

                    <input
                        className="contact-input-small contact-input"
                        // value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}></input>
                </div>

                <label>Email</label>
                <input
                    className="contact-input-small contact-input"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>

                <label>Phone Number</label>
                <input
                    className="contact-input-small contact-input"
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}></input>

                <label>Question or message</label>
                <textarea
                    type="text"
                    className="contact-input-large contact-input"
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}></textarea>

                <button
                    className="submit-button contact-input"
                    onClick={() => sendMessage}>
                    Submit
                </button>
            </div>
        </>
    )
}
