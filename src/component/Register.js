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
     
    <div>
<div className="container mt-3">
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{fontSize:32}}>
  PHONES</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style={{textAlign:"right"}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{fontSize:17}}>Smartphones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{fontSize:17}}>Iphones</a>
        </li>
        <li class="nav-item"> 
          <a class="nav-link"  href="#" style={{fontSize:17}}>Android</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>




    <div className="App">
      <div className="container py-5">
        <div
          className="card border-0 shadow w-75 p-3 mx-auto "
          style={{ backgroundColor: "lightblue", borderRadius: "20PX" }}
        >
          <h1 className="text-center pt-3 text-dark ">Ragistration Form</h1>
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
    </div>
  );
};

export default Register;
