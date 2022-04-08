const Signup = () => {
  return (
    <div className="row align-self-center justify-content-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4">
        <h3 className="text-center">Please sign up</h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@domain.com"
          />
          <label for="email">Email Address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label for="password">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="comfirmPassword"
            placeholder="Comfirm Password"
          />
          <label for="comfirmpassword">Comfirm Password</label>
        </div>
        <div className="d-grid col-8 mx-auto">
          <button type="button" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
