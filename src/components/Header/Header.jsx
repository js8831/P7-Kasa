import { Link, Outlet } from "react-router-dom";
import "./Header.scss";

import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <Logo fill="#FF6060" className="logo" />
      </Link>
      <nav className="header__nav">
        <Link className="nav-link" to="/">
          Accueil
        </Link>

        <Link className="nav-link" to="about">
          A propos
        </Link>
      </nav>
      {/* Un <Outlet> rend n'importe quelle route enfant actuellement active.
      C'est comme un espace réservé pour les routes enfants définies ci-dessus. */}
      <Outlet />
    </header>
  );
}

export default Header;
