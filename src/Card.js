import React from "react";

const Card =({ data })=>{
    return(
        
       <>
            {
                data.map((element,k)=>{
                    return(
                        <>
                        <div className="card mt-3 mb-2" style={{ width: '22rem', border: 'none' }}>
                                               <img src={element.imgdata1} alt="..." className="img-fluid cd1" />
                                               <div className="card-body">
                                                   <div className="upper_data d-flex justify-content-between align-item-center">
                                                       <h4 className="mt-2 text-start">{element.rname}</h4>
                                                       <span className="mt-2"> {element.star} ★</span>
                                                   </div>
                                                   <div className=" lower_data d-flex justify-content-between">
                                                       <h5 className="">{element.somedata}</h5>
                                                       <span className="text-end">{element.rs}</span>
                                                   </div>
                                                   <div className="extra d-flex">
                                                       <div className="last-data d-flex justify-content-around  ">
                                                       <p className="fs-5">{element.address}</p>
                                                           <p className="ms-3 mt-1">{element.extra}</p>
                                                           
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                       </>
                    );
                })
            }
       </>
    );
}

export default Card;