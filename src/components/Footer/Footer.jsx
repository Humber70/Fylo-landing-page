import css from './Footer.module.css';

export default function Footer () {
  return (
    <footer className={css.footer}>
      <section className={css.contentFooter}>
        <div className={css.contentLogoFooter}>
          <img src="/assets/images/logo.svg" alt="logo" />        
        </div>

        <div className={css.contentInfo}>
          <div className={css.adress}>
            <img src="/assets/icons/icon-location.svg" alt="icon-location" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi nostrum, quae quaerat harum iste cum delectus incidunt voluptatum, quos repellat eum architecto officiis rem aliquid.</p>
          </div>

          <div className={css.contact}>
            <div className={css.itemContact}>
              <img src="/assets/icons/icon-phone.svg" alt="icon-phone" />
              <span>+1-543-123-4567</span>
            </div>
            <div className={css.itemContact}>
              <img src="/assets/icons/icon-email.svg" alt="icon-email" />
              <span>example@fylo.com</span>
            </div>
          </div>

          <div className={css.footerLinks}>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
            </ul>
          </div>
          
          <div className={css.social}>
            <a href="">
              <img src="/assets/icons/icon-facebook.svg" alt="icon-facebook" />
            </a>
            <a href="">
              <img src="/assets/icons/icon-twitter.svg" alt="icon-twitter" />

            </a>
            <a href="">
              <img src="/assets/icons/icon-instagram.svg" alt="icon-instagram" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}