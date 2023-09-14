import Logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/turniere">Turniere</Link>
          </li>
          <li>
            <Link to="/online_liga">Online Liga</Link>
          </li>
          <li>
            <Link to="/neujahrsturnier">Neujahrsturnier</Link>
          </li>
          <li>
            <Link to="/bpm_pokal">Pokal</Link>
          </li>
          <li>
            <Link to="/anmeldung">Anmeldung</Link>
          </li>
          <li>
            <Link to="/wer_sind_wir">Wer sind Wir?</Link>
          </li>
        </ol>
        <img
          src={Logo}
          alt="BeerPongMania Logo"
        />
      </nav>
    </>
  );
};

export default Navbar;
