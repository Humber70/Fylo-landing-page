import css from './Products.module.css'

export default function Products () {
  return (
    <section className={css.products}>
      <div className={css.contentProducts}>
        <div>
          <img src="/assets/icons/icon-access-anywhere.svg" alt="icon-access" />
          <h2>Access your files, anywhere</h2>
          <p>The ability to use a smartphone, table, or computer to access your account means your files follow you everywhere.</p>
        </div>
        <div>
          <img src="/assets/icons/icon-security.svg" alt="icon-security" />
          <h2>Security you can trust</h2>
          <p>2-factor autothentication and user-controlled encryption are just couple of the security features we allow to help secure your files.</p>
        </div>
        <div>
          <img src="/assets/icons/icon-collaboration.svg" alt="icon-collaboration" />
          <h2>Real-time collaboration</h2>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>
        <div>
          <img src="/assets/icons/icon-any-file.svg" alt="icon-any-file" />
          <h2>Store any type of file</h2>
          <p>Whether you are sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely sotored and shared.</p>
        </div>
      </div>
    </section>
  )
}