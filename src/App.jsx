import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return ( //1st row and column for name & title. 2nd column picture and a litle information
  <div>
    <div><div id="top" className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col-4">    
    <div className="col-3">    
    <h1>Victoria Sugden</h1>
    <h3>Software Engineer</h3>
    <h3>Front-end Developer</h3>
    <br></br>
    <button>View CV</button> <button>About Me</button> <button>Contact</button>

  </div>
  <div class="row">
  <div class="col-4"></div>
  <div class="col-3"></div>
  <img id="me-pic" src="src/images/me.jpg" className="card-img-top" alt="image of me"/>
  <div class="col-8"></div>
    <p className="card-text">A little about me and my skills and why I love software engineering. . . .  See some of my projects below.</p></div>
  <div class="col-6"></div>
    <p className="card-text">A little about me and my skills and why I love 

    front-end development. . . .  See some of my projects below.</p></div>
</div></div>
<div class="row">
  <div class="col-8"></div>
@@ -26,37 +28,41 @@ function App() {
    <div className="row row-cols-1 row-cols-md-2 g-4 pt-3">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <img src="src/images/place-holder.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Project 1</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button> View</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <img src="src/images/place-holder.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Project 2</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button> View</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <img src="src/images/place-holder.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Project 3</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button> View</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <img src="src/images/place-holder.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Project 4</h3>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button> View</button>
      </div>
    </div>
  </div>
@@ -71,42 +77,50 @@ function App() {
  <h4> My Skills</h4>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
      <div class="col-md-1">


      <figure><img id="skills-icons" src="src/images/github.png" alt="github logo"/> <figcaption> Github </figcaption>
</figure>
      </div>
      <div class="col-md-4">
      <figure><img id="skills-icons" src="src/images/responsive.png" alt="responsive design logo"/> <figcaption> Responsive Design </figcaption>
      <div class="col-md-1">
      <figure><img id="skills-icons" src="src/images/responsive.png" alt="responsive design logo"/> <figcaption> Respons-<br></br>ive Design </figcaption>
</figure>
      </div>
      <div class="col-md-4">
      <div class="col-md-1">
      <figure><img id="skills-icons" src="src/images/vscode.jpg" alt="visual studio code design logo"/> <figcaption> Visual Studio Code</figcaption>
</figure>
      </div>
      <div class="col-md-4">
      <div class="col-md-1">
      <figure><img id="skills-icons" src="src/images/react.png" alt="react logo"/>  <figcaption> React</figcaption>
</figure>
      </div>
      <div class="col-md-4">



      <div class="row"></div>

      <div class="col-md-1">
      <figure> <img id="skills-icons" src="src/images/javascript.png" alt="JavaScript logo"/>  <figcaption> JavaScript</figcaption>
</figure>
      </div>
      <div class="col-md-4">
      <div class="col-md-1">
      <figure> <img id="skills-icons" src="src/images/css.png" alt="CSS3 logo"/>   <figcaption> CSS3</figcaption>
</figure>
      </div>
      <div class="col-md-4">
      <div class="col-md-1">
      <figure> <img id="skills-icons" src="src/images/html.png" alt="HTML5 logo"/>    <figcaption> HTML5</figcaption>
</figure>
      </div>

      <div class="col-md-1">
      <figure> <img id="skills-icons" src="src/images/bootstrap.png" alt="HTML5 logo"/>    <figcaption> Bootstrap</figcaption>
</figure>
      </div>

    </div>
  </div>
  <div class="row pt-3">



  </div>
  <button>View CV</button> <button>About Me</button>
  <br></br>

@@ -123,10 +137,10 @@ function App() {
  </div>

<div id="footer"class="row pt-3">
<p> © 2024. Created by Victoria Sugden all rights reserved. </p>
</div><img id="footerpic" src="src/images/github.png" alt="github logo"/>
<p> © 2024. Created by Victoria Sugden. </p>
<img id="footerpic" src="src/images/github.png" alt="github logo"/>

<div><img id="footerpic" src="src/images/linkedin.png" alt="linkedin logo"/>
<img id="footerpic" src="src/images/linkedin.png" alt="linkedin logo"/>
</div></div>
