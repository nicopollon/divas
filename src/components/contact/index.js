import React from "react"
import { useState, useRef } from "react"
import styled from "styled-components"
import "./contact.css"

import emailjs from "emailjs-com"
const Button = styled.button`
  padding: 16px 30px;
  border-radius: 50px;
  background-color: ${props => (props.selected ? "white" : "transparent")};
  color: ${props => (props.selected ? "#1a5090" : "#685e7f")};
  box-shadow: ${props =>
    props.selected
      ? "2px 2px 3px 0 rgb(140 135 166 / 12%), 3px 7px 12px 0 rgb(140 135 166 / 8%), 1px 14px 24px 0 rgb(140 135 166 / 8%)"
      : "none"};
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border: none;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    background-color: white;
    box-shadow: none;
  }
`
const SubmitButton = styled.button`
  padding: 15px 30px;
  border-radius: 50px;
  color: white;
  background-color: #1a5090;
  border: none;
  font-size: 24px;
  font-weight: 600;
  box-shadow: 2px 2px 3px 0 rgb(140 135 166 / 12%),
    3px 7px 12px 0 rgb(140 135 166 / 8%), 1px 14px 24px 0 rgb(140 135 166 / 8%);

  transition: 0.3s;
  &:hover {
    background-color: #041c2c;
  }
`
const Contact = () => {
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
  function getForm() {
    if (formType) {
      return (
        <div className="form-wrapper">
          <h4>General contact</h4>
          <p>Get in touch with us</p>
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
        </div>
      )
    } else {
      return (
        <div className="form-wrapper">
          <h4>Get an inquiry</h4>
          <p>
            Already thinking about installing a divas lift?
            <br />
            Get in touch with us
          </p>
          <form className="form" onSubmit={sendFullInquiryMail}>
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
        </div>
      )
    }
  }
  const [formType, setFormType] = useState(true)
  const changeFormType = bool => setFormType(bool)

  const [feedbackText, setFeedbackText] = useState("")
  const changeFeedbackText = text => setFeedbackText(text)
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
        {getForm()}
      </div>
    </div>
  )
}

export default Contact
