import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "./field";
import Button from "./button";
import { apis } from "../config/config";
import { fetchData } from "../utils/querydata";

const initialFormData = Object.freeze({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  comfirmpassword: "",
});

const Signup = (props) => {
  const { setUsers } = props;
  const [formdata, setFormdata] = useState(initialFormData);
  let navigate = useNavigate();
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { register } = apis;
    const data = new URLSearchParams();
    for (const [key, value] of Object.entries(formdata)) {
      data.append(key, value);
    }
    const result = await fetchData({ url: register["url"], opts: { ...register["opts"], body: data } });
    const newUser = {
      email: formdata.email,
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      id: result.id,
      token: result.token,
    };
    setUsers((prev) => prev.concat(newUser));
    navigate("/users");
  };
  return (
    <div className="row mt-5 align-self-center justify-content-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4">
        <h3 className="text-center">Please sign up</h3>
        <Field id="firstname" name="firstname" placeholder="first name" label="First Name" onChange={handleChange} />
        <Field id="lastname" name="lastname" placeholder="last name" label="Last Name" onChange={handleChange} />
        <Field type="email" id="email" name="email" placeholder="eve.holt@reqres.in" label="Email Address" onChange={handleChange} />
        <Field type="password" id="password" name="password" placeholder="pistol" label="Password" onChange={handleChange} />
        <Field type="password" id="comfirmPassword" name="comfirmPassword" placeholder="Comfirm Passwor" label="Comfirm Password" onChange={handleChange} />
        <Button text="Sign up" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Signup;
