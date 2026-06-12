import Logo from "../svg/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="width">
        <div className="footer__flex">
          <div className="footer__column footer__column--flex">
            <Logo />

            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} Banuza. All rights reserved.
            </p>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">Pages</h2>
            <ul className="footer__nav">
              <li className="footer__item">
                <a className="footer__anchor" href="/">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__anchor" href="/#games">
                  Games
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__anchor" href="/#updates">
                  Updates
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__anchor" href="/#team">
                  Team
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__anchor"
                  href="/math-frenzy-privacy-policy/"
                >
                  Math Frenzy Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__anchor" href="mailto:hello@banuza.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">Social</h2>
            <ul className="footer__nav">
              <li className="footer__item">
                <a
                  className="footer__anchor"
                  target="_blank"
                  href="https://x.com/banuzagames"
                >
                  X
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__anchor"
                  target="_blank"
                  href="https://discord.gg/UKDKNPSn"
                >
                  Discord
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__anchor"
                  target="_blank"
                  href="https://youtube.com/@banuzagames"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">Play</h2>
            <ul className="footer__nav">
              <li className="footer__item">
                <a
                  className="footer__anchor"
                  target="_blank"
                  href="https://store.steampowered.com/search/?developer=Banuza%E2%84%A2"
                >
                  Steam
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__anchor"
                  target="_blank"
                  href="https://banuza.itch.io/"
                >
                  Itch
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__anchor"
                  target="_blank"
                  href="https://play.unity.com/es/user/7ccc983b-399e-4e8d-a27a-629f45d11f2d"
                >
                  Unity
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
