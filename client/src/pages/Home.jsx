import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";
import Plan from "../components/Plan";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-purple-100">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Plan />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
