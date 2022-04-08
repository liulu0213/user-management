import { useOutletContext } from "react-router-dom";

const UserDetail = (props) => {
  //const [user, setUser] = useOutletContext();
  const { id = "", name = "", profile = "", image = "" } = props;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="photo" />
      <div className="card-body">
        <h5>{name}</h5>
        <p className="card-text">{profile}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">item 1</li>
          <li className="list-group-item">item 2</li>
          <li className="list-group-item">item 3</li>
        </ul>
        <a href="/users" className="btn btn-primary">
          Go Back
        </a>
      </div>
    </div>
  );
};

export default UserDetail;
