import { useState } from "react";

const Forget = () => {
  const [newpassword, setNewpassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  function saveData() {
    let data = { newpassword, confirmPassword };
    console.log(data);
  }

  return (
    <div className="App">
      <div className="container " style={{ width: "63%" }}>
        <div
          className="card border-0 "
          style={{ backgroundColor: "lightblue", borderRadius: "20PX" }}
        >
          <h1 className="text-center pt-3 text-success ">Forget Password</h1>
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
              value="Register"
              onClick={saveData}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
