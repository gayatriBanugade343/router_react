import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header =()=>{
    const zomatologo="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png";
    return(
        <>
         <div className="head"> 
         <div className="container justify-content-center d-flex align-item-center">
       
       <div className="mt-5 ">
       <img src={zomatologo} className="justify-content-center d-flex mt-5" style={{width:"20rem" ,position:"relative" ,left:"2%" ,cursor:"pointer"}} alt=""/>
       <p className="justify-content-center d-flex mt-5 display-5 text-light">Discover the best food & drinks in PuneBaner, Pune</p>
       </div>
           
       </div>
       <div className="navbar_zomato d-flex">
       <div className="search_nav">
      <ul>
        <li className="nav-item p-3 snip1135">      
          <Link  to='/Search' style={{ textDecoration: 'none', color:'black' }} className='li fs-4 p-2 text-light'>Ahmedabad</Link>
         </li>
      </ul>
     </div>
     <div className="header_nav">
      <ul>
        <li className="nav-item p-3 snip1135">
          <Link  to='/ZomatoHeader' style={{ textDecoration: 'none', color:'black'}} className='li fs-4 p-2 text-light'>Baner</Link>
        </li>
      </ul>
     </div> 
       </div>
         </div>
        </>
    );
}

export default Header;