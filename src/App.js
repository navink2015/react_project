// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Style from "./Components/style";
// import Inline from "./Components/Inline";
// import "./newStyle.css";
// import a from "./sample.module.css";
// import Starting from "./Components/Starting";
// import Second from "./Components/Second";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import Pagging from "./Components/Pagging";

// import React from 'react'

export default function App() {
  const [loggedin, setLoggedin] = useState(false);
  const responseGoogleSuccess = (response) => {
    setLoggedin(true);
    console.log(response);
  };
  const responseGoogleFailure = () => {
    setLoggedin(false);
  };
  const logout = () => {
    setLoggedin(false);
  };

  return (
    <div className="App">
      
      {loggedin ? (
        <Pagging logout={logout} />
      ) : (
        <GoogleLogin
          clientId="406039270022-6uiiiifb1hr66kc0jgflohipuq00j5n3.apps.googleusercontent.com"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
}

// // export default class App extends Component {
//   state = {
//     person: [
//       { name: "navin", age: 24 },
//       { name: "banu", age: 25 },
//       {name:"abcd",age:20}
//     ],
//   };
//   buttonHandler(){
//     console.log("button is clicked");
//     this.setState({person: [
//       { name: "banu", age: 24 },
//       { name: "navin", age: 25 },
//       {name:"abcd",age:20}
//     ]})
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello react</h1>
//         <GoogleLogin
//               clientId=""
//               onSuccess={responseGoogle}
//               onFailure={responseGoogle}
//         />
//         {/* <Starting /> */}
//         {/* <Second name={this.state.person[0].name} age={this.state.person[0].age} />
//         <Second name={this.state.person[1].name} age={this.state.person[1].age}>
//           hi i am banu
//         </Second>
//         <Second name={this.state.person[2].name} age={this.state.person[2].age} />
//         <button onClick={this.buttonHandler}>button</button>
//         <button onClick={()=>{console.log("hello  ")}}>button</button> */}

//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <Starting />
//       <Second name="navin" age='24' />
//       <Second name="banu" age="24">hi i am banu</Second>
//       <Second name="ajd" age="30  "/>
//     </div>
//   );
// }

// export default App;
