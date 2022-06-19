import React from "react";


const ProductDetails = (myprops) => {
    return (
        <div className="product">

             <h3>{myprops.pname}</h3>
             <p>Rs.{myprops.myprice}</p>
             <p>Quantity:-{myprops.myqty}</p>

        </div>
    )
}

export default ProductDetails;

// Props in Reactjs.