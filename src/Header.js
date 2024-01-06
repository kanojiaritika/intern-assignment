import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import About from "./About";
import Instructor from "./Instructor";
import Review from "./Review";

function Header() {
  const [data, setData] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/pageData.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <p className="name">{data.instructor.name}</p>
      <p className="courseTitle">
        Learn key life lessons from <br></br>the Gita: Mind control and conflict
        resolution
      </p>
      <nav>
        <button
          className={activeButton === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className={activeButton === "instructor" ? "active" : ""}
          onClick={() => scrollToSection("instructor")}
        >
          Instructor
        </button>
        <button
          className={activeButton === "review" ? "active" : ""}
          onClick={() => scrollToSection("review")}
        >
          Reviews
        </button>
      </nav>
      <div className="courseInfo">
        <p className="feeTitle">Course Fees</p>
        <p className="price">Rs. 5,000</p>
        <p className="priceSubTitle">What's included</p>
        <ul>
          <li>5-on demand videos</li>
          <li>2 livestream sessions</li>
          <li>Live Q&A sessions with Nityanand Charan Das</li>
          <li>An active WhatsApp community</li>
        </ul>
        <button className="register">Register Today</button>
      </div>
      <About />
      <Instructor />
      <Review />
    </div>
  );
}

export default Header;
