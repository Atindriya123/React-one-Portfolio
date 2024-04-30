import react from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Experience from "./components/Experience.jsx";
import Contacts from "./components/Contacts.jsx";


function App() {
  return (
    <div className="text-4xl">
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contacts/>
    </div>
  
  );
  
}

export default App;
