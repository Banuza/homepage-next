import Link from "next/link";
import Logo from "../svg/Logo";

export default function Header() {
  return (
    <header className="header">
      <div className="width">
        <div className="header__flex">
          <Link href="/" className="header__logo">
            <Logo />
          </Link>

          <ul className="header-nav">
            <li className="header-nav__item">
              <Link href="/#games" className="header-nav__anchor">
                Games
              </Link>
            </li>
            <li className="header-nav__item">
              <Link href="/#updates" className="header-nav__anchor">
                Updates
              </Link>
            </li>
            <li className="header-nav__item">
              <Link href="/#team" className="header-nav__anchor">
                Team
              </Link>
            </li>
            <li className="header-nav__item">
              <Link
                href="mailto:hello@banuza.com"
                className="header-nav__anchor"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
