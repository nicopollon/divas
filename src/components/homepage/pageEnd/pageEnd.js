import React, { useRef, useState } from "react"
import emailjs from "emailjs-com"

import { Section, Container } from "./pageEndComponents"
import "./pageEnd.css"
import { AiOutlineRight } from "react-icons/ai"

const PageEnd = () => {
  const [feedbackText, setFeedbackText] = useState("")
  const changeFeedbackText = text => setFeedbackText(text)

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()
    e.target.reset()
    changeFeedbackText("Submitting ...")
    emailjs
      .sendForm(
        "service_nqylmmo",
        "template_iyeslop",
        form.current,
        "user_NCdjJOqcFzG6UK9SPjpvy"
      )
      .then(
        result => {
          console.log(result.text)
          changeFeedbackText("Thank you, we'll contact you shortly")
        },
        error => {
          console.log(error.text)
          changeFeedbackText("Something went wrong please retry")
        }
      )
  }
  return (
    <Section>
      <Container>
        <h2>GET IN TOUCH</h2>
        <form className="email-container" ref={form} onSubmit={sendEmail}>
          <input
            className="email-input"
            type="email"
            name="email"
            placeholder=" Your email"
            required
          ></input>
          <button className="email-submit" type="submit" value="Send">
            <AiOutlineRight className="submit-icon" />
          </button>
        </form>
        <p>{feedbackText}</p>
      </Container>
    </Section>
  )
}

export default PageEnd
