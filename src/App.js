import React,{Component} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header.js"
import Home from "./components/home.js";
import About_us from "./components/about_us"
import Service from "./components/service"
import Contact from "./components/contact"
import Footer from "./components/footer.js";
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about_us" element={<About_us/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    )
  }
}
export default App ;

