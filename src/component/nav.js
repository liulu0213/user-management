import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const logout = () => {
    console.log("Sign out");
  };
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          User Management
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a
                className={`nav-link ${pathname === "/users" ? "active" : ""}`}
                href="/users"
              >
                User List
              </a>
            </li>
            <li className="navbar-item">
              <a
                className={`nav-link ${pathname === "/signup" ? "active" : ""}`}
                href="/signup"
              >
                Sign up
              </a>
            </li>
            <li className="navbar-item">
              <a
                className={`nav-link ${pathname === "/signin" ? "active" : ""}`}
                href="/signin"
              >
                Sign in
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="#" onClick={logout}>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
