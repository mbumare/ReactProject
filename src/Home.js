import React from "react";
import ProductDetails from "./Hooks/HookFive";



const MyHome = () => {

    const item = [
        { name: "Java", price: 200, qty: 10 },
        { name: "html", price: 300, qty: 15 },
        { name: "css", price: 500, qty: 20 },
        { name: "reactjs", price: 400, qty: 25 },
        { name: "python", price: 100, qty: 10 }
    ]
    return (
        <div>
            <h1 align="center">React Props & Component Re-Use</h1>
            <ProductDetails pname="Orange" myprice="300" myqty="10" />
            <ProductDetails pname="Mango" myprice="400" myqty="18" />
            <ProductDetails pname="Lemon" myprice="500" myqty="15" />
            <ProductDetails pname="Milk" myprice="200" myqty="20" />

            {
                item.map((iteminfo, index) => {
                    return (
                        <ProductDetails
                            key={index}
                            pname={iteminfo.name}
                            myprice={iteminfo.price}
                            qty={iteminfo.qty} />
                    )
                })
            }


        </div>
    )
}

export default MyHome;