import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Review() {
  const [data, setData] = useState(null);

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
  return (
    <div id="review">
      <div className="section2">
        <div className="review-content">
          <FontAwesomeIcon icon={faArrowLeft} className="arr" />
          <h2>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system."
          </h2>
          <FontAwesomeIcon icon={faArrowRight} className="arr" />
        </div>
        <div className="reviewer">
          <img src="./assets/ncd2.jpg" alt="reviewer"></img>
          <div className="info">
            <h3>Name of the reviewer</h3>
            <p>Designation of the reviewer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
