import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Login() {

  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  function onsub(){
    let item ={email,password};
    console.log=(item);
  }
  
    return (
    <div style={{backgroundColor:"lightskyblue"}}>

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
          <a class="nav-link" href="#" style={{fontSize:18}}>Iphones</a>
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

<div className="App"  style={{width:"82%" ,marginLeft:"50px",display:"flex",justifyContent:"space-between"}}>
  <div className="container py-5">
  <div className="card border-0 shadow w-45 p-3 mx-auto"
          style={{ backgroundColor:"lightblue", borderRadius: "20PX" }}
          >
  
 
        <h1 style={{color:"black"}}>Login</h1> <br/>
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
  onChange={(e)=>{setEmail(e.target.value)}} name="email" value={email}/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
  onChange={(e)=>{setPassword(e.target.value)}} name="password" value={password}/>
  <label for="floatingPassword">Password</label>
</div>
<br/>

<button type="button" class="btn btn-primary" onClick={onsub}>Login</button>
<hr></hr>
{/* <h5>Or</h5>
<h4 style={{color:"blue"}}> <BsFacebook/>Log in With Facebook</h4> */}
<h6><b><Link to="/forget">Forgot Password....?</Link></b></h6><br/>
<div className="card border-0 shadow w-45 p-1 mx-auto"
   style={{backgroundColor:"lightpink",  borderRadius: "20PX" ,width:"75%", textAlign:"left"}}>
         <h5><b>Don't have an account? <Link to="/register">Register</Link></b></h5>
  </div>

  </div>
  </div>
  <img src="https://th.bing.com/th/id/OIP.dS0bvCYhfDtB1HjK-46emAHaG2?w=204&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7"
 style={{width:"72%",height:"430px",alignSelf:"center",borderRadius:"10px"}}/>



  </div>
 

    </div>
    )
}

export default Login
