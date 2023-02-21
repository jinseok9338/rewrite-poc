import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the home page!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Learn about us!</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Get in touch with us!</p>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacted" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
