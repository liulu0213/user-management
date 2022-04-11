import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "./share/field";
import Button from "./share/button";
import Alert from "./share/alert";
import { useAuth } from "./authProvider";
import {regexps} from '../utils/utils';

const initialFormData = Object.freeze({
  email: "",
  password: "",
});

const Signin = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState(initialFormData);
  const [errmsg, setErrmsg] = useState();
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate data
    if(!regexps.email.test(formdata['email'])){
      setErrmsg("Please input correct email");
      return false;
    }
    if(formdata['password']===''){
      setErrmsg("Please input password")
      return false;
    }
    //Post Data
    const loginUser = await auth.signin(formdata);
    if (loginUser.status === "success") {
      navigate("/users");
    } else {
      setErrmsg(loginUser.status);
    }
  };
  return (
    <div className="row mt-5 align-self-center justify-content-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4">
        <h3 className="text-center">Please sign in</h3>
        {errmsg ? <Alert text={errmsg} /> : null}
        <Field type="email" id="email" name="email" placeholder="eve.holt@reqres.in" label="Email Address" onChange={handleChange} />
        <Field type="password" id="password" name="password" placeholder="pistol" label="Password" onChange={handleChange} />
        <Button text="Login" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Signin;
