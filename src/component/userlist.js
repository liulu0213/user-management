import { useNavigate } from "react-router-dom";
import Button from "./button";

const UserList = (props) => {
  const { users = [] } = props;
  let navigate = useNavigate();
  if (users.length === 0) return null;

  const handleClick=(link)=>()=>{
    navigate(link)
  };

  return (
    <div className="row mt-5 align-self-center justify-content-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4">
        <Button text="Add User" onClick={() => navigate("/signup")} />
        <ul className="mt-4">
          {users.map((user) => (
            <li key={user.id}>
              <a href="#" onClick={handleClick(`/users/${user.id}`)}>
                {user.email}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
