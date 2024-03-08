import { useState } from "react";

export function ContanctUs() {
    const [firstName, setFirstName] = useState("First name");
    const [lastName, setLastName] = useState("Last name");
    const [email, setEmail] = useState("Email");
    const [phone, setPhone] = useState("Phone");
    const [message, setMessage] = useState("Question or message");

    const sendMessage = () => {
        console.log("send message")
    }


    return (
        <>
            <div className="contact-container small-font font-bold">

                <div>Name</div>
                <div>
                    <div className="contact-name-fields">
                        <input
                            className="contact-input-small border-hover"
                            type="text"
                            // value={firstName}
                            placeholder={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}></input>

                        <input
                            className="contact-input-small border-hover"
                            // value={lastName}
                            placeholder={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}></input>
                    </div>
                </div>

                <label>Email</label>
                <input
                    className="contact-input-small border-hover"
                    placeholder={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>

                <label>Phone Number</label>
                <input
                    className="contact-input-small border-hover"
                    placeholder={phone}
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}></input>

                <label>Question or message</label>
                <textarea
                    className="contact-input-large border-hover"
                    placeholder={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}></textarea>

                <button
                    className="submit-button border-hover"
                    onClick={() => sendMessage}>
                    Submit
                </button>
            </div>
        </>
    )
}
