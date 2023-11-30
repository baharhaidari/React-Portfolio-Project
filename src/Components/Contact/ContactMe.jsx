import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import phone from "../../assets/Images/phone-call.png";
import email from "../../assets/Images/email.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default function ContactMe() {
  const form = useRef();
  const inputRef = useRef(null);
  const { t } = useTranslation();

  // state variables
  const [isClicked, setIsClicked] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(true);

  useEffect(() => {
    // checking if the inputs are empty or not
    const inputs = Array.from(form.current.querySelectorAll("input"));
    const textarea = form.current.querySelector("textarea");

    const checkFormEmpty = () => {
      const isEmpty =
        inputs.every((input) => !input.value.trim()) && !textarea.value.trim();
      setIsFormEmpty(isEmpty);
    };

    inputs.forEach((input) => {
      input.addEventListener("input", checkFormEmpty);
    });
    textarea.addEventListener("input", checkFormEmpty);

    checkFormEmpty(); // Call the function initially

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", checkFormEmpty);
      });
      textarea.removeEventListener("input", checkFormEmpty);
    };
  }, []);

  const handleClick = () => {
    // Performs a click action if the form is not empty
    if (isFormEmpty) {
      return;
    }

    // Set isClicked to true to indicate a click action is in progress
    setIsClicked(true);

    // Set a timeout to reset isClicked and trigger a click on the input element after 3 seconds
    setTimeout(() => {
      setIsClicked(false);
      if (inputRef.current) {
        inputRef.current.click();
      }
    }, 3000);
  };

  // sending form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9q68fs",
        "template_hdw4ebb",
        e.target,
        "n01DueOdBya9LfMGt"
      )
      .then(
        (result) => {
          form.current.reset();
          setIsFormEmpty(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="heading">{t("CONTACT.heading")}</h1>

      <img className="phone-img" alt="phone pic" src={phone}></img>
      <img className="email-img" alt="phone pic" src={email}></img>

      <img className="phone-img sec" alt="phone pic" src={phone}></img>
      <img className="email-img sec" alt="phone pic" src={email}></img>

      <div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-box">
              <input
                type="text"
                placeholder={t("CONTACT.first-name-label")}
                name="name"
                required
              />

              <input
                type="text"
                placeholder={t("CONTACT.last-name-label")}
                name="last-name"
                required
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder={t("CONTACT.email-address-label")}
                name="user-email"
                required
              />

              <input
                type="text"
                placeholder={t("CONTACT.email-subject-label")}
                name="email-subject"
                required
              />
            </div>

            <div className="input-box">
              <textarea
                cols="30"
                rows="10"
                placeholder={t("CONTACT.message-area-label")}
                name="message"
                required
              ></textarea>
            </div>

            <input type="submit" ref={inputRef} style={{ display: "none" }} />
            <button
              onClick={handleClick}
              className={`submit-btn ${isClicked ? "active" : ""}`}
              disabled={isFormEmpty}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faRocket} />
              </span>
              <span className="text">{t("CONTACT.button-text")}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
