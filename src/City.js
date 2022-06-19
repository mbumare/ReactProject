import React from "react";

const citylist = ["Banglore","Mumbai","Pune","Chennai","Kolkata"];

const MyCity = () =>{
    return(
        <div>
            <h1>Available City :- {citylist.length}</h1>
            {
                citylist.map((name,index)=>{
                     return(
                         <p key={index}>{name}</p>
                     )
                })
            }
        </div>
    )
}
export default MyCity;