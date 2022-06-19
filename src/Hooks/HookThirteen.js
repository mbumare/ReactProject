import { useState, useEffect } from "react";


const HookThirteen = () => {
    const [itemlist, updateItem] = useState([]);
    const [itemdetails, updateDetails] = useState({})
    const getItem = () => {
        fetch("http://localhost:1234/itemlist")
            .then(response => response.json())
            .then(itemArray => {
                updateDetails(itemArray[0])
                updateItem(itemArray.reverse())
            })
    }

    useEffect(() => {
        getItem();
    }, [1])


    const passItem = (item) => {
        updateDetails(item);  // here we are passing the complete details of a product
    }


    return (
        <div>
            <h1 align="center">Total Item:{itemlist.length}</h1>
            <p>
                {

                    itemlist.map((info, index) => {
                        return (
                            <button key={index} onClick={passItem.bind(this, info)}> {info.name} - {info.price}</button>
                        )
                    })
                }

            </p>
            <div className="product">
                <h3>{itemdetails.name}</h3>
                <img src={itemdetails.photo} height="200" width="100%" />
                <p>Price Rs.{itemdetails.price}</p>
                <p>in Stock {itemdetails.qty}</p>
                <p>{itemdetails.itemdetails}</p>
            </div>

        </div>
    )

}

export default HookThirteen;