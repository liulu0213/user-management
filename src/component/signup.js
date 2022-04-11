import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "./share/field";
import Button from "./share/button";
import Alert from "./share/alert";
import { useAuth } from "./authProvider";
import {regexps} from '../utils/utils';

const initialFormData = Object.freeze({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  comfirmpassword: "",
});

const Signup = (props) => {
  const auth = useAuth();
  const { setUsers } = props;
  const [formdata, setFormdata] = useState(initialFormData);
  const [errmsg, setErrmsg] = useState();
  let navigate = useNavigate();
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Validate data
    if(!regexps.email.test(formdata['email'])){
      setErrmsg("Please input correct email");
      return false;
    }
    if(!regexps.password.test(formdata['password'])){
      setErrmsg("Password must has 8 charactors, and must include at lease 1 uppercase charactor, 1 lowercase charactor and 1 digit");
      return false;
    }
    if(formdata['password']!==formdata['comfirmPassword']){
      setErrmsg("Please comfirm your password");
      return false;
    }
    //Post data
    const newUser = await auth.signup(formdata);
    if (newUser.status === "success") {
      setUsers((prev) => prev.concat(newUser));
      navigate("/users");
    } else {
      setErrmsg(newUser.status);
    }
  };
  return (
    <div className="row mt-5 align-self-center justify-content-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4">
        <h3 className="text-center">Please sign up</h3>
        {errmsg ? <Alert text={errmsg} /> : null}
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
