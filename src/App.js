// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Header";
// import About from "./About";
// import Instructor from "./Instructor";
// import Review from "./Review";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Header></Header>} />
//         <Route path="/about" element={<About></About>} />
//         <Route path="/instructor" element={<Instructor></Instructor>} />
//         <Route path="/review" element={<Review></Review>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Instructor from "./Instructor";
import Review from "./Review";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
