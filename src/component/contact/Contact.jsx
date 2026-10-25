import './Contact.css'
import { useLanguage } from "../../Context/LanguageContext";
import { useRef, useState, useEffect } from "react";
import { ContactData } from './ContactData'
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
  const { t } = useLanguage();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();

    setErrors((prev) => {
      const updatedErrors = { ...prev };

      if (name === "name") {
        if (trimmedValue) {
          delete updatedErrors.name;
        } else if (prev.name) {
          updatedErrors.name = "Please enter your name.";
        }
      }

      if (name === "message") {
        if (trimmedValue) {
          delete updatedErrors.message;
        } else if (prev.message) {
          updatedErrors.message = "Please enter your message.";
        }
      }

      if (name === "email") {
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue);

        if (emailIsValid) {
          delete updatedErrors.email;
        } else if (prev.email) {
          updatedErrors.email = trimmedValue
            ? "Please enter a valid email address."
            : "Please enter your email.";
        }
      }

      return updatedErrors;
    });
  };

  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);
  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    const newErrors = {};

    if (!name) {
      newErrors.name = "Please enter your name.";
    }

    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_b78qjh3",
        "template_3k6gl8r",
        form.current,
        {
          publicKey: "PTU5GIlcEiPgJtURO",
        }
      );

      form.current.reset();
      setErrors({});
      setStatus("success");
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>{t.contact.subtitle}</h5>
        <h2>{t.contact.title}</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map((contact) => (
            <div className="contact_option" key={contact.id}>
              {contact.icon}
              <h4>
                {contact.id === 1
                  ? t.contact.email
                  : contact.id === 2
                    ? t.contact.messenger
                    : t.contact.whatsapp}
              </h4>
              <h5>{contact.info}</h5>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.sendMessage}
              </a>
            </div>
          ))
          }
        </div>
        <form ref={form} onSubmit={sendEmail} noValidate>
          <input
            type="text"
            placeholder={t.contact.fullName}
            name="name"
            onChange={handleChange}
            required
          />
          {errors.name && (
            <small className="field-error">{errors.name}</small>
          )}

          <input
            type="email"
            placeholder={t.contact.yourEmail}
            name="email"
            onChange={handleChange}
            required
          />
          {errors.email && (
            <small className="field-error">{errors.email}</small>
          )}

          <textarea
            rows={10}
            name="message"
            onChange={handleChange}
            placeholder={t.contact.messagePlaceholder}
            required
          />
          {errors.message && (
            <small className="field-error">{errors.message}</small>
          )}

          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSending}
          >
            {isSending ? "Sending..." : t.contact.sendMessage}
          </button>
          {status === "success" && (
            <p className="form-message success">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="form-message error">
              Failed to send your message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
