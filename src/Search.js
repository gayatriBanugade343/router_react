import React, { useEffect, useState } from "react";
import './Search.css';
import FoodData from "./FoodData";
import Cards from "./Cards";
import ZomatoHeader from "./ZomatoHeader";
import { Link } from "react-router-dom";


const Search =()=>{

    const [fdata,setfdata]=useState(FoodData);
   
    const [copydata,setcopydata] = useState([]);
    console.log(copydata);

    // search
    const chageData =(e)=>{
        let getchangedata = e.toLowerCase();
        if(getchangedata == ""){
            setcopydata(fdata);
        }else{
            let storeddata = copydata.filter((ele,k)=>{
                return ele.rname.toLowerCase().match(getchangedata)
            });
             setcopydata(storeddata)
        }
    }

    const zomatologo="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

    useEffect(()=>{
        setcopydata(FoodData);
    },3000);

    return(
        <>
        {/* <div className="container justify-content-between d-flex align-items-center">
        
        <a href={<ZomatoHeader/>} target="_blank"> <img src={zomatologo} style={{width:"8rem" ,position:"relative" ,left:"2%" ,cursor:"pointer"}} alt=""/></a>
            <h2 style={{color:"#1b1464" ,cursor:"pointer"}}>Search filter app</h2>
        </div> */}
        <div className="container mt-4 mb-4">
        <h2 className="px-4">Restaurent in Ahmedabad Open Now</h2>
        </div>
         <form className="d-flex justify-content-center align-items-center mt-3 ">
        <div className="d-flex justify-content-center align-items-center col-lg-4">
        <input className="form-control " type="text" 
        onChange={(e)=>chageData(e.target.value)}
        placeholder="Search Restaurent" aria-label="default input example"/>
        </div>
        <button className="btn text-light col-lg-1 ms-2" style={{background:"#ed4c67"}}>Submit</button>
        </form>
        <section className="item-section mt-4 container">
        
        <div className="row mt-2 d-flex justrify-content-around align-item-center ca" >
        
            { copydata && copydata.length ? <Cards data={copydata}/> :"Data not found" }
       
        </div>
        </section>
        
        </>
    );  
}

export default Search;