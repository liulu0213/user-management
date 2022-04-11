import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import AuthProvider from "./component/authProvider";
import Nav from "./component/nav";
import Footer from "./component/footer";
import Readme from "./component/readme";
import UserList from "./component/userlist";
import Signup from "./component/signup";
import Signin from "./component/signin";
import UserDetail from "./component/userdetial";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "godin@mus.ca",
      lastname: "Godin",
      firstname: "Sea",
    },
  ]);
  const [user, setUser] = useState({});
  return (
    <AuthProvider>
      <div className="d-flex flex-column h-100">
        <header>
          <Nav />
        </header>
        <main className="container">
          <Routes>
            <Route path="/signup" element={<Signup setUsers={setUsers} />} />
            <Route path="/signin" element={<Signin />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Readme />} />
              <Route path="/users" element={<UserList users={users} setUser={setUser} />} />
              <Route path="/users/:id" element={<UserDetail {...user} />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

function Layout() {
  return <Outlet />;
}

export default App;
