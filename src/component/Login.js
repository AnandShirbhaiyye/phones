import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs'
function Login() {

  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  function onsub(){
    let item ={email,password};
    console.log=(item)
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
          <a class="nav-link"  href="#" style={{fontSize:20}}>Android</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
{/* <div class="card" style="width: 18rem;"> */}
<div className="App">
  <div className="container py-5">
  <div className="card border-0 shadow w-45 p-3 mx-auto">
  
  {/* <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li> */}
        <h1>Login</h1> <br/>
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
  onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
  onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
  <label for="floatingPassword">Password</label>
</div>
<br/>

<button type="button" class="btn btn-primary" onClick={onsub}>Login</button>
<hr></hr>
<h5>Or</h5>
<h4 style={{color:"blue"}}> <BsFacebook/>Log in With Facebook</h4>
<h6><Link to="/">Forgot Password....?</Link></h6>
  </div>
  </div>
</div>


  
  <div className="card border-0 shadow w-45 p-1 mx-auto">
         <h5>Don't have an account? <Link to="/">Register</Link></h5>
  </div>
  
  

 
{/* <Link to="/">User forgorn password..</Link>  */}
    </div>
    )
}

export default Login
