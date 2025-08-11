import css from './Hero.module.css'

export default function Hero () {
  return (
    <section className={css.hero}>
      <div className={css.heroImage}>
        <img src="/assets/images/illustration-intro.png" alt="hero-image" />
      </div>
      <div className={css.heroContent}>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <button>Get Started</button>
      </div>
    </section>
  )
}