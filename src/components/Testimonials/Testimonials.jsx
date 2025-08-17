import css from './Testimonials.module.css'

export default function Testimonials () {
  return (
    <section className={css.testimonials}>
      <div className={css.contentTestimonials}>
        <div className={css.cardTestimonial}>
          <p>Fylo has improved our team productivity by ab order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
          </p>
          <div className={css.profile}>
            <img src="/assets/images/profile-1.jpg" alt="avatar-profile" />
            <div>
              <h2>Satish Patel</h2>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
        <div className={css.cardTestimonial}>
          <p>
            Fylo has improved our team productivity by ab order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
          </p>
          <div className={css.profile}>
            <img src="/assets/images/profile-2.jpg" alt="avatar-profile" />
            <div>
              <h2>Bruce McKenzie</h2>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
        <div className={css.cardTestimonial}>
          <p>
            Fylo has improved our team productivity by ab order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
          </p>
          <div className={css.profile}>
            <img src="/assets/images/profile-3.jpg" alt="avatar-profile" />
            <div>
              <h2>Iva Boyd</h2>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}