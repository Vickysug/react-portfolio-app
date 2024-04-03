import React from 'react';


function Header() {
    return ( //1st row and column for name & title. 2nd column picture and a litle information
        <div>
            <div id="top" className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col-3">
                    <h1>Victoria Sugden</h1>
                    <h3>Front-end Developer</h3>
                    <br></br>
                    <button>View CV</button> <button>About Me</button> <button>Contact</button>

                </div>
            </div>
        </div>
    )
}
export default Header;