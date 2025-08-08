import css from './Header.module.css'
import Navigator from '../Navigator/Navigator'

export default function Header () {
  return (
    <header className={css.header}>
      <img src="/assets/images/logo.svg" alt="logo-image" />
      <Navigator />
    </header>
  )
}