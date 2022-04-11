import { Routes, Route, Outlet } from "react-router-dom";
import { RequireAuth } from "./authProvider";
import Readme from "./readme";
import UserList from "./userlist";
import Signup from "./signup";
import Signin from "./signin";
import UserDetail from "./userdetial";

const Layout = () => {
  return <Outlet />;
};

const Main = ({ users, setUsers, user, setUser }) => (
  <main className="container">
    <Routes>
      <Route path="/signup" element={<Signup setUsers={setUsers} />} />
      <Route path="/signin" element={<Signin />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Readme />} />
        <Route
          path="/users"
          element={
            <RequireAuth>
              <UserList users={users} setUser={setUser} />
            </RequireAuth>
          }
        />
        <Route
          path="/users/:id"
          element={
            <RequireAuth>
              <UserDetail {...user} />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  </main>
);

export default Main;
