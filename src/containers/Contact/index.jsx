import Button from "../../components/Button";
import "./contact.css";

export default function Contact() {
  return (
    <div className="app__contact">
      <div className="app__contact-heading">
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="app__contact-input">
        <input type="text" placeholder="NAME" />
        <input type="email" placeholder="EMAIL" />
        <input type="text" placeholder="MESSAGE" />
      </div>
      <div className="app__contact-button">
        <Button name="SEND MESSAGE" />
      </div>
    </div>
  );
}
