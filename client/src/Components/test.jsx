import Carousel from "react-elastic-carousel";
import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import "../assets/css/default.css";
import "../assets/css/LineIcons.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/slick.css";

import "./Card.css";

const Test = () => {
  const [data, setData] = useState([]);

  const getTestimonial = async () => {
    const response = await fetch("http://localhost:8080/all");
    const myTestData = await response.json();
    setData(myTestData.reverse());
  };
  useEffect(() => {
    getTestimonial();
  }, []);
  console.log(data);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="test-corousal">
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay={true}
        autoPlaySpeed={2000}
      >
        {data.map((currElement, index) => {
          return (
            <div className="card  " data-slick-index="4" key={index}>
              <div style={{ margin: "1.4rem" }}>
                <img
                  src={currElement.photo}
                  alt="Author"
                  style={{
                    borderRadius: "50%",
                    height: "120px",
                    width: "120px",
                  }}
                />
              </div>
              <div style={{ margin: "1.8 rem", height: "280px" }}>
                <p style={{ margin: "1rem", textAlign: "center" }}>
                  {currElement.description}
                </p>
                <hr />
                <h6
                  className="myauthorname"
                  style={{ marginTop: "0.7rem", textAlign: "center" }}
                >
                  {currElement.name}
                </h6>
                <span style={{ fontSize: "0.8rem", color: "#898383" }}>
                  {currElement.post}
                </span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Test;
