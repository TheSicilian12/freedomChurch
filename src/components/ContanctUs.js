import { useState } from "react";

export function ContanctUs() {
    const [firstName, setFirstName] = useState("first");
    const [lastName, setLastName] = useState("last");
    const [email, setEmail] = useState("email");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");



    return (
        <>
            <div className="contact-container border">
                <div>Name</div>
                <div className="contact-name-fields">
                    <input
                        className="contact-input-small"
                        type="text"
                        // value={firstName}
                        // placeholder={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}></input>

                    <input
                        className="contact-input-small"
                        // value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}></input>
                </div>

                <label>Email</label>
                <input
                    className="contact-input-small"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>

                <label>Phone Number</label>
                <input
                    className="contact-input-small"
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}></input>

                <label>Question or message</label>
                <textarea
                    className="contact-input-large"
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}></textarea>


            </div>
        </>
    )
}
