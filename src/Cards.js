import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((element, k) => {
                    return (
                        <>
                            <div className="card mt-3 mb-2" style={{ width: '22rem', border: 'none' }}>
                                <img src={element.imgdata} alt="..." className="img-fluid cd1" />

                                <div className="card-body">
                                    <div className="upper_data d-flex justify-content-between align-item-center">
                                        <h4 className="mt-2">{element.rname}</h4>
                                        <span className="mt-2">{element.price}★</span>
                                    </div>
                                    <div className=" lower_data d-flex justify-content-around">
                                        <h5 className="">{element.address}</h5>
                                        <span className="text-end">{element.somedata}</span>
                                    </div>
                                    <div className="extra d-flex">
                                        <div className="last-data d-flex justify-content-center align-item-center">
                                            <img src={element.deling} alt="..." className="img-fluid limg"/>
                                            <p className="ms-2" style={{marginTop:"18px"}}>{element.somedata}</p>
                                            <img src={element.arring} alt="..." className="img-fluid laimg"/>
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

export default Cards;