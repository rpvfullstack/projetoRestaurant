import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'
// <div>Navbar</div>

const Navbar = () => {
  const [menuopen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const [modal, setModal] = useState(false);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const toogleModal = () => {
    setModal(!modal);
  };

  const handleFormSubmit = () => {};
  return (
    <>
      <nav>
        <input
          type="button"
          id="click"
          checked={menuopen}
          onChange={() => setMenuOpen}
        />
        <label htmlFor="click" className="menu-btn">
          <i className="fa fa-bars"></i>
          <div id="logo">
            <Link to="/" className="navbar-brand">
              <h1>Restaurant</h1>
            </Link>
          </div>
        </label>
        <ul>
          <li>
            <NavLink
              activeclassname="active"
              to="/"
              onClick={handleMenuItemClick}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleMenuItemClick}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleMenuItemClick}>
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" onClick={handleMenuItemClick}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" onClick={handleMenuItemClick}>
              Equipe
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleMenuItemClick}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="">
        <div className="">
          {" "}
          <div>
            <div className=""> </div>
            <h2 className="">Restaurant Boca Aberta</h2>
            <p className="">Restaurant</p>
            <h2>Assine nossa Nesletter</h2>

            <p>
              Assinatura Gratuita, assine e ganhe 20% OFF no primeiro consumo
            </p>

            <form onSubmit={handleFormSubmit}>
              <input
                className=""
                type="email"
                required
                placeholder="Seu Email"
              />
              <span>
                <p>
                  <input type="checkbox" id="same" required className="in" />
                  <label htmlFor="same">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia, alias eum? Impedit laudantium voluptates deserunt
                    reprehenderit, non quam harum illo.
                  </label>
                </p>
              </span>
              <button className="btn-pr" type="submit">
                Assine{" "}
              </button>
            </form>
            <button className="close-modal" onClick={toogleModal}></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
