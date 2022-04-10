import { useState } from "react";
import Field from "./field";
import Button from "./button";
import { apis } from "../config/config";
import { fetchData } from "../utils/querydata";
import { regexps } from "../utils/utils";

const initialFormData = Object.freeze({
  email: "",
  password: "",
});

const Signin = (props) => {
  const { setLoggedUser } = props;
  const [formdata, setFormdata] = useState(initialFormData);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { login } = apis;
    const data = new URLSearchParams();
    for (const [key, value] of Object.entries(formdata)) {
      data.append(key, value);
    }
    const result = await fetchData({
      url: login["url"],
      opts: { ...login["opts"], body: data },
    });
    const loginedUser = {
      email: formdata.email,
      token: result.token,
    };
    setLoggedUser(loginedUser);
  };
  return (
    <div className="row mt-5 align-self-center justify-content-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4">
        <h3 className="text-center">Please sign in</h3>
        <Field type="email" id="email" name="email" placeholder="eve.holt@reqres.in" label="Email Address" onChange={handleChange} />
        <Field type="password" id="password" name="password" placeholder="pistol" label="Password" onChange={handleChange} />
        <div className="invalid-feedback">Password must has 8 charactors, and must include at lease 1 uppercase charactor, 1 lowercase charactor and 1 digit</div>
        <Button text="Login" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Signin;
