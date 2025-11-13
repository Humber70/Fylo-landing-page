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
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          
          <div className={css.social}>
            <a href="#">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="#ffff"  className={css.iconsSocials}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffff" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={css.iconsSocials}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={css.iconsSocials}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}