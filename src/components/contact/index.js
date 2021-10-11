import React from "react"
import { useState } from "react"
import "./contact.css"
import { Button, SubmitButton } from "./contactElements"
import emailjs from "emailjs-com"
const cabin = [
  {
    id: 1,
    value: "Painted",
  },
  {
    id: 2,
    value: "SkinPlate",
  },
  {
    id: 2,
    value: "Steel",
  },
]

const Contact = () => {
  const [feedbackText, setFeedbackText] = useState("")
  const changeFeedbackText = text => setFeedbackText(text)
  const [formType, setFormType] = useState(true)
  const changeFormType = bool => setFormType(bool)
  const sendGeneralEmail = e => {
    e.preventDefault()
    changeFeedbackText("Submitting ...")
    emailjs
      .sendForm(
        "service_nqylmmo",
        "template_z0pdlji",
        e.target,
        "user_NCdjJOqcFzG6UK9SPjpvy"
      )
      .then(
        result => {
          console.log(result.text)
          changeFeedbackText("Thank you! Your submission has been received!")
        },
        error => {
          console.log(error.text)
          changeFeedbackText(
            "Oops! Something went wrong while submitting the form."
          )
        }
      )

    e.target.reset()
  }
  const sendFullInquiryMail = e => {
    e.preventDefault()
    changeFeedbackText("Submitting ...")
    emailjs
      .sendForm(
        "service_nqylmmo",
        "template_3jjbai9",
        e.target,
        "user_NCdjJOqcFzG6UK9SPjpvy"
      )
      .then(
        result => {
          console.log(result.text)
          changeFeedbackText("Thank you! Your submission has been received!")
        },
        error => {
          console.log(error.text)
          changeFeedbackText(
            "Oops! Something went wrong while submitting the form."
          )
        }
      )
    e.target.reset()
  }

  return (
    <div className="section">
      <div className="hero-text">
        <p className="label">Get in touch</p>
        <h1>Quote for your homelift</h1>
        <p>
          We are ready to help you, fill the form below to get in touch or
          receive a quote for your project
        </p>
      </div>
      <div className="form-card">
        <div className="form-tabs">
          <Button
            selected={formType}
            onClick={() => changeFormType(formType === false ? true : false)}
          >
            General
          </Button>
          <Button
            selected={!formType}
            onClick={() => changeFormType(formType === false ? true : false)}
          >
            Inquiry
          </Button>
        </div>

        {(() => {
          if (formType) {
            return (
              <form className="form" onSubmit={sendGeneralEmail}>
                <div>
                  <label for="name" className="label-text">
                    Name
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    label
                    required
                  ></input>
                </div>
                <div>
                  <label for="email" className="label-text">
                    Email
                  </label>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  ></input>
                </div>
                <div>
                  <label for="phone" className="label-text">
                    Phone
                  </label>
                  <input
                    className="input"
                    id="phone"
                    name="phone"
                    placeholder="+XX 123 12 12 123"
                  ></input>
                </div>
                <div>
                  <label for="message" className="label-text">
                    Message
                  </label>
                  <textarea
                    className="input"
                    name="message"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <SubmitButton value="send" type="submit">
                  Send
                </SubmitButton>
                <div>{feedbackText}</div>
              </form>
            )
          } else {
            return (
              <form className="form" onSubmit={sendFullInquiryMail}>
                <div>
                  <label for="cabin" className="label-text">
                    Cabin
                  </label>
                </div>
                <div>
                  <p className="label-text">Name</p>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </div>
                <div>
                  <p className="label-text">Email</p>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </div>
                <div>
                  <p className="label-text">Phone</p>
                  <input
                    className="input"
                    name="phone"
                    placeholder="Phone number"
                  ></input>
                </div>
                <div>
                  <p className="label-text">Company / Website</p>
                  <input
                    className="input"
                    name="company"
                    placeholder="Company / Website"
                  ></input>
                </div>
                <div>
                  <p className="label-text">Stops</p>
                  <input
                    className="input"
                    name="stops"
                    type="number"
                    placeholder="Elevator Stops"
                    min="2"
                    max="6"
                    required
                  ></input>
                </div>
                <div>
                  <p className="label-text">Cabin Finish</p>
                  <div className=" custom-select">
                    <select name="cabin">
                      <option value="1">Painted</option>
                      <option value="2">Skinplate</option>

                      <option value="3">Brushed stainless steel</option>
                      <option value="4">Glass</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p className="label-text">Door finish</p>
                  <div className="custom-select">
                    <select name="door">
                      <option value="1">Painted</option>
                      <option value="2">Brushed stainless steel</option>
                      <option value="2">Stainless steel etching</option>
                    </select>
                  </div>
                </div>

                <div>
                  <p className="label-text">Message</p>
                  <textarea
                    className="input"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <SubmitButton type="submit" value="Send">
                  Send
                </SubmitButton>
                <div>{feedbackText}</div>
              </form>
            )
          }
        })()}
      </div>
    </div>
  )
}

export default Contact
