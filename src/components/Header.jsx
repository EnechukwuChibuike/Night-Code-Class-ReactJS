import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="h-[10vh] flex justify-between px-5 items-center shadow-md bg-white">
        <strong>
          <Link to="/">Logo.</Link>
        </strong>

        <nav className="flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
