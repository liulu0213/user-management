import { useLocation } from "react-router-dom";
import { useAuth } from "./authProvider";

const Nav = () => {
  const auth = useAuth();
  const location = useLocation();
  const { pathname } = location;
  console.log("auth", auth);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          User Management
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {!auth.user ? (
              <>
                <li className="navbar-item">
                  <a className={`nav-link ${pathname === "/users" ? "active" : ""}`} href="/users">
                    User List
                  </a>
                </li>
                <li className="navbar-item">
                  <a className={`nav-link ${pathname === "/signup" ? "active" : ""}`} href="/signup">
                    Sign up
                  </a>
                </li>
                <li className="navbar-item">
                  <a className={`nav-link ${pathname === "/signin" ? "active" : ""}`} href="/signin">
                    Sign in
                  </a>
                </li>
              </>
            ) : (
              <li className="navbar-item">
                <a className="nav-link" href="#" onClick={() => auth.signout()}>
                  Sign out
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
