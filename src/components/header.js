import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>
        <div className="details">
            <p>Contact Us: +910123456789 | sp@hospital.com</p>
        </div>
        <header>
        <span>
                <p id="p1">SP</p><p id="p2">Hospital</p>
        </span>
        <nav>
               <li id="link"><Link to="/" >Home</Link></li> 
               <li id="link"><Link to="about_us">About Us</Link></li> 
               <li id="link"><Link to="service">Service</Link></li>
               <li id="link"><Link to="contact">Contact</Link></li> 
        </nav>
        </header>
        <hr/>
       
        </>
    )
}
export default Header;