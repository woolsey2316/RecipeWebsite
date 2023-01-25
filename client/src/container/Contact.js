import React from "react";
import style from "@/styles/sass/Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className={style.inner}>
        <section>
          <form method="post" action="#">
            <div className={style.fields}>
              <div className={`${style.field} ${style.half}`}>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className={`${style.field} ${style.half}`}>
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className={style.field}>
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="6"></textarea>
              </div>
            </div>
            <ul className={style.actions}>
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className={style.primary}
                />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
        </section>
        <section className={style.split}>
          <section>
            <div className={style.contactMethod}>
              <span
                className={`${style.icon} ${style.solid} ${style.alt} ${style.faEnvelope}`}
              ></span>
              <h3>Email</h3>
              <a href="#">information@untitled.tld</a>
            </div>
          </section>
          <section>
            <div className={style.contactMethod}>
              <span
                className={`${style.icon} ${style.solid} ${style.alt} ${style.faPhone}`}
              ></span>
              <h3>Phone</h3>
              <span>(000) 000-0000 x12387</span>
            </div>
          </section>
          <section>
            <div className={style.contactMethod}>
              <span
                className={`${style.icon} ${style.solid} ${style.alt} ${style.faHome}`}
              ></span>
              <h3>Address</h3>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Contact;
