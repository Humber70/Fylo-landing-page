import css from './InfoSection.module.css';

export default function InfoSection () {
  return (
    <section className={css.infoSection}>
      <div className={css.contentInfoSection}>
        <img src="/assets/images/illustration-stay-productive.png" alt="illustration-fylo" />
        <div className={css.contentDescription}>
          <h2>Stay productive, wherever you are</h2>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          <a href="#">See how Fylo works</a>
        </div>
      </div>
    </section>
  )
}