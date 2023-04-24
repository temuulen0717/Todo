import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./Components/Navbar"


import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
<React.StrictMode>
  <Navbar/>
	<App />
</React.StrictMode>,
document.getElementById("root")
);
