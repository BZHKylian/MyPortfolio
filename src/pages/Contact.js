import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../css/contact/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateIdConfirmation = process.env.REACT_APP_EMAILJS_TEMPLATE_CONFIRMATION;
    const templateIdMessage = process.env.REACT_APP_EMAILJS_TEMPLATE_MESSAGE;

    // Envoi du premier mail (confirmation d'envoi)
    emailjs
      .sendForm(
        serviceId,
        templateIdConfirmation,
        e.target,
        userId
      )
      .then(
        (result) => {
          setStatus("Message envoyé !");

          // Envoi du second mail (message de l'utilisateur) après confirmation réussie
          emailjs
            .sendForm(
              serviceId,
              templateIdMessage,
              e.target,
              userId
            )
            .then(
              (result) => {
                console.log("Message reçu envoyé", result);
              },
              (error) => {
                console.log("Erreur lors de l'envoi du message reçu", error);
              }
            );

          // Réinitialisation du formulaire
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Erreur lors de l'envoi du message.");
        }
      );
  };


  return (
    <>
      <Header />
      <div className="contact-page">
        <h2>Contactez-moi</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
        {status && <p id="status">{status}</p>}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
