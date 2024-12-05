import React from "react";
import hero_image from "../assets/images/Oral_Health-5_480x480.webp";
import Header from "../comonent/Header";
function Home() {
  return (
    <>
      <Header />
      <div className="main_hero_wrapper">
        <div className="hero_slider">
          <img src={hero_image} alt="" />
        </div>
        <div className="hero_section">
          <h1>
            Good Food Choise <br /> Are Good Health
          </h1>
          <h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus{" "}
            <br />
            earum maiores odio itaque, placeat, sunt temporibus eligendi autem{" "}
            <br />
            enim aliquam repudiandae at architecto dignissimos. Inventore!
          </h6>
          <div className="hero_button">
            <button> Order Now </button>
          </div>
        </div>
      </div>
      <div className="hero_counting">
        <div className="saving">
          <p>1000+</p>
          <p>Saving</p>
        </div>
        <div className="saving">
          <p>512+</p>
          <p>Photos</p>
        </div>
        <div className="saving">
          <p>124+</p>
          <p>Foods</p>
        </div>
        <div className="saving">
          <p>2545+</p>
          <p>Customers</p>
        </div>
      </div>
    </>
  );
}

export default Home;
