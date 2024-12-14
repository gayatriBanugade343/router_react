import DiningData from "./DiningData";
import Card from "./Card";
import React, { useEffect, useState } from "react";

const ZomatoHeader =()=>{
    const [ddata,setddata]=useState(DiningData);
   
    const [copydata,setcopydata] = useState([]);
    console.log(copydata);

    const chageData =(e)=>{
        let getchangedata = e.toLowerCase();
        if(getchangedata == ""){
            setcopydata(ddata);
        }else{
            let storeddata = copydata.filter((ele,k)=>{
                return ele.rname.toLowerCase().match(getchangedata)
            });
             setcopydata(storeddata)
        }
    }
    useEffect(()=>{
        setcopydata(DiningData);
    },3000);


    return(
        <>
        <div className="container">
        <h2 className="mt-4 mb-3">Best Dining Restaurants near you in Baner</h2>
        <form className="d-flex justify-content-center align-items-center mt-3 ">
        <div className="d-flex justify-content-center align-items-center col-lg-4">
        <input className="form-control " type="text"  onChange={(e)=>chageData(e.target.value)} 
        placeholder="Search Restaurent" aria-label="default input example"/>
        </div>
        <button className="btn text-light col-lg-1 ms-2" style={{background:"#ed4c67"}}>Submit</button>
        </form>
        </div>
        <section className="item-section mt-4 container">
        
        <div className="row mt-2 d-flex justrify-content-around align-item-center ca" >
        {/* <Card/> */}
            { copydata && copydata.length ? <Card data={copydata}/> :"Data not found" }
       
        </div>
        </section>
        </>
    );
}

export default ZomatoHeader;