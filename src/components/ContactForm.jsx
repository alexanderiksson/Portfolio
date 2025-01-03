import React, { useState } from 'react';

const ContactForm = () => {

    const [alert, setAlert] = useState("")
    const [alertStyle, setAlertStyle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const data = {
            name: form.name.value,
            email: form.email.value,
            msg: form.message.value
        }

        if (!data.name || !data.email || !data.msg) {

            setAlert("Please fill out all fields!")
            setAlertStyle("bg-red-500")

        } else {

            const webhook = import.meta.env.VITE_ZAPIER_HOOK_URL

            fetch(webhook, {
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status)
                }
                setAlert("Your message has been sent!")
                setAlertStyle("bg-green-500")
                form.reset()
            })
            .catch(error => {
                console.error(error)
                setAlert("Something went wrong!")
                setAlertStyle("bg-red-500")
            })
        }

    }

    return(
        <form className="w-full max-w-lg flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                    className="p-2 rounded-sm bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg"
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">E-mail</label>
                <input
                    className="p-2 rounded-sm bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg"
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                    className="p-2 rounded-sm bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg"
                    name="message"
                    id="message"
                    rows="5"
                    required
                ></textarea>
            </div>

            {alert && <p className={`${alertStyle} w-full p-2 bg-opacity-30 backdrop-blur-lg rounded-sm text-center`}>{alert}</p>}

            <button className="button">Send</button>

        </form>
    )
}

export default ContactForm
