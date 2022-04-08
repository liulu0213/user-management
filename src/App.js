import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./component/nav";
import Footer from "./component/footer";
import UserList from "./component/userlist";
import Signup from "./component/signup";
import Signin from "./component/signin";
import UserDetail from "./component/userdetial";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "godin",
      email: "godin@mus.ca",
      profile: "godin's profile",
    },
  ]);
  const [user, setUser] = useState({
    id: 1,
    name: "godin",
    profile: "godin's profile",
  });
  return (
    <div className="d-flex flex-column h-100">
      <header>
        <Nav />
      </header>
      <main className="container">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route element={<Layout />}>
            <Route path="/users" element={<UserList users={users} />} />
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
