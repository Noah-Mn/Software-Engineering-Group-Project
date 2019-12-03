import React, { Component } from 'react';
import './App.css';
//import Profile from './Components/Profile.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <html>
         <header> 
           <h3>WELCOME TO DHIS</h3>
         </header>
         <body>
<div id="header">
		 <div id="nav">
			 <ul>
				 <li><a href="">Home</a></li>
				 <li><a href="" >Profile</a></li>
			 </ul>
		 </div>
</div>
<div id="content">
		 <div id="programs">
			 <p>Programs</p>
		 </div>
		 <div class="article column1">
			 <p>Program 1</p>
		 </div>
		 <div class="article  column2">
			 <p>Program 2</p>
		 </div>
		 <div class="article  column3">
			 <p>Program 3</p>
		 </div>
</div>
<div id="footer">
		 <li><a href="">feedback</a> </li>
     <li><a href="">About</a> </li>
</div>
         </body>

       </html>
      </div>
    );
  }
}

export default App;
