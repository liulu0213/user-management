import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./component/nav";
import Footer from "./component/footer";
import UserList from "./component/userlist";
import Signup from "./component/signup";
import Signin from "./component/signin";
import UserDetail from "./component/userdetial";
import { fetchData } from "./utils/querydata";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "godin@mus.ca",
      lastname: "Godin",
      firstname: "Sea",
    },
  ]);
  const [user, setUser] = useState({
    id: 1,
    email: "godin@mus.ca",
    lastname: "Godin",
    firstname: "Sea",
  });
  const [loggedUser, setLoggedUser] = useState();
  return (
    <div className="d-flex flex-column h-100">
      <header>
        <Nav />
      </header>
      <main className="container">
        <Routes>
          <Route path="/signup" element={<Signup setUsers={setUsers} />} />
          <Route path="/signin" element={<Signin setLoggedUser={setLoggedUser} />} />
          <Route element={<Layout />}>
            <Route path="/users" element={<UserList users={users} setUser={setUser} />} />
            <Route path="/users/:id" element={<UserDetail {...user} />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Layout() {
  return <Outlet />;
}

export default App;
