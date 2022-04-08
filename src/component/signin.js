const Signin = () => {
  return (
    <div className="row align-self-center justify-content-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4">
        <h3 className="text-center">Please sign in</h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@domain.com"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="d-grid col-8 mx-auto">
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
