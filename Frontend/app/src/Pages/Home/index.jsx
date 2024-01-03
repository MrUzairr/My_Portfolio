import React from "react";
import Navbar from "../../Components/Navbar";
import FrontPage from "../../Components/FrontPage";
import About from "../About";
import Skill from "../Skill";
import Service from "../Service";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <div>
        <Navbar />
        <FrontPage />
        <About />
        <Skill />
        <Service />
        <Footer />
    </div>
  );
}
