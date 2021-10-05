import { useState } from "react";

const Forget = () => {
  const [newpassword, setNewpassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  function saveData() {
    let data = { newpassword, confirmPassword };
    console.log(data);
  }

  return (

      <div>

    <div className="container mt-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
          <h1 className="text-center pt-3 text-dark ">Forget Password</h1>
          <form className="row g-3">
            <div className="form-group">
              <label htmlFor="fullname">New Password</label>
              <input
                type="text"
                className="form-control is-valid"
                placeholder="new password"
                required
                onChange={(e) => {
                  setNewpassword(e.target.value);
                }}
                name="newpassword"
                value={newpassword}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="form-group">
              <label htmlFor="text">Confirm Password</label>
              <input
                type="text"
                className="form-control is-valid"
                placeholder="Confirm Password"
                required
                onChange={(e) => {
                  setConfirmpassword(e.target.value);
                }}
                name="confirmPassword"
                value={confirmPassword}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <input
              type="submit"
              className="btn btn-primary my-8"
              value="Confirm"
              onClick={saveData}
            />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Forget;
