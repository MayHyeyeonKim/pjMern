import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import A from "./Component/A";
// import B from "./Component/B";
// import C from "./Component/C";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/A" element={<A />} />
//         <Route path="/B" element={<B />} />
//         <Route path="/C" element={<C />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();
