import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return ( //1st row and column for name & title. 2nd column picture and a litle information
  <div>
    <div><div id="top" className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col-4">    
    <h1>Victoria Sugden</h1>
    <h3>Software Engineer</h3>
    <br></br>
    <button>View CV</button> <button>About Me</button> <button>Contact</button>
    
  </div>
  <div class="row">
  <div class="col-4"></div>
  <img id="me-pic" src="src/images/me.jpg" className="card-img-top" alt="image of me"/>
  <div class="col-8"></div>
    <p className="card-text">A little about me and my skills and why I love software engineering. . . .  See some of my projects below.</p></div>
</div></div>
<div class="row">
  <div class="col-8"></div>
  <div class="col-4"></div>
</div>

    <div className="row row-cols-1 row-cols-md-2 g-4 pt-3">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Project 1</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Project 2</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Project 3</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Project 4</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

<div class="row pt-3">
  <h4> My Skills</h4>

  </div>


<div class="row pt-3">
  <h4> Lets Chat . . . </h4>

  </div>

<div id="footer"class="row pt-3">
<p> © 2024. Created by Victoria Sugden all rights reserved. </p>
</div><img id="footerpic" src="src/images/github.png" className="card-img-top" alt="github logo"/>

<div><img id="footerpic" src="src/images/linkedin.png" className="card-img-top" alt="linkedin logo"/>
</div></div>

  
  




  )
}

export default App;
