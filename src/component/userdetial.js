import { useNavigate } from "react-router-dom";

const UserDetail = (props) => {
  const { id = "", email = "", lastname = "", firstname = "" } = props;
  let navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">User Info</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {id}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Last Name: {lastname}</li>
          <li className="list-group-item">First Name: {firstname}</li>
        </ul>
        <a href="#" className="btn btn-primary" onClick={() => navigate("/users")}>
          Go Back
        </a>
      </div>
    </div>
  );
};

export default UserDetail;
