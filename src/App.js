import { useState } from "react";
import AuthProvider from "./component/authProvider";
import Nav from "./component/nav";
import Main from "./component/main";
import Footer from "./component/footer";

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
        <Main users={users} setUsers={setUsers} user={user} setUser={setUser} />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
