import css from './Navigator.module.css'

export default function Navigator () {
  return (
    <ul className={css.navigator}>
      <li>
        <a className={css.link} href="#">Features</a>
      </li>
      <li>
        <a className={css.link} href="#">Teams</a>
      </li>
      <li>
        <a className={css.link} href="#">Sign in</a>
      </li>
    </ul>
  )
}