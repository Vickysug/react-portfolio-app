import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return ( //1st row and column for name & title. 2nd column picture and a litle information
  <div>
    <div><div id="top" className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col-4">    
    <h1>Victoria Sugden</h1>
    <h3>Software Engineer</h3>
    <button>View CV</button> <button>About Me</button> <button>Contact</button>
    
  </div>
  <div class="row">
  <div class="col-8">col-8</div>
  <img id="me-pic" src="src/images/me.jpg" className="card-img-top" alt="image of me"/>
    <div><p className="card-text">a little about me and my skills here plus a cv link. See some of my projects below.</p></div>
</div></div></div>
<div class="row">
  <div class="col-8"></div>
  <div class="col-4"></div>
</div>

    <div className="row row-cols-1 row-cols-md-2 g-4">
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
  </div>




  )
}

export default App;
