//import contact.css
import "../styles/contact.css";
export default function Contact() {
  return (
    <div className="contactpage">
      <div className="socials"></div>
      <div className="form">
        <form action="https://formspree.io/f/mdorpoqy" method="POST">
          <input type="text" name="Name" placeholder="Full Name" />
          <input type="text" name="Email" placeholder="Email" />
          <input type="text" name="Mob. Number" placeholder="Contact Number" />
          <textarea name="Message" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
