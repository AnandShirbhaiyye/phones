import { useState } from "react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function saveData() {
    let data = { fullName, mobile, email, password };
    console.log(data);
  }

  return (
    <div className="App">
      <div className="container py-5">
        <div
          className="card border-0 shadow w-75 p-3 mx-auto "
          style={{ backgroundColor: "lightblue", borderRadius: "20PX" }}
        >
          <h1 className="text-center pt-3 text-success ">Ragistration Form</h1>
          <form className="row g-3">
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="form-control is-valid"
                placeholder="FullName"
                required
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                name="fullName"
                value={fullName}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control is-valid"
                placeholder="Mobile"
                required
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                name="mobile"
                value={mobile}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control is-valid"
                placeholder="Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                value={email}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="text"
                className="form-control is-valid"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                value={password}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <input
              type="submit"
              className="btn btn-primary my-8"
              value="Register"
              onClick={saveData}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
