import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";


const HookTwelve = () => {
    const [itemlist, updateItem] = useState([]);
    const getItem = () => {
        fetch("http://localhost:1234/itemlist")
            .then(response => response.json())
            .then(itemArray => {
                updateItem(itemArray.reverse())
            })
    }

    useEffect(() => {
        getItem();
    }, [1])

    const [pname, pickName] = useState("");
    const [pprice, pickPrice] = useState("");
    const [pqty, pickQty] = useState("");
    const [pphoto, pickPhoto] = useState("")
    const [pdetails, pickDetails] = useState("");
    const [message, updateMessage] = useState("");

    const Save = () => {
        var newitem = {
            "name": pname,
            "price": pprice,
            "qty": pqty,
            "details": pdetails,
            "photo": pphoto
        };
        var url = "http://localhost:1234/itemlist";
        axios.post(url, newitem)
            .then(response => {
                updateMessage(pname + " Save Successfully!");
                getItem(); // to reload the item

                pickName("");
                pickPrice("");
                pickQty("");
                pickPhoto("");
                pickDetails("");
            })

    }

    const Deleteitem = (id, name) => {
        var url = "http://localhost:1234/itemlist/" + id;
        axios.delete(url)
            .then(response => {
                updateMessage(pname + " Deleted Successfully_!")
                getItem(); // to reload the item
            })
    }


    return (
        <div>
            <h1>Total Item:{itemlist.length}</h1>
            <p align="center">
                <input type="text" placeholder="Item Name" onChange={obj => pickName(obj.target.value)} value={pname} />
                <input type="text" placeholder="Item Price" onChange={obj => pickPrice(obj.target.value)} value={pprice} />
                <input type="text" placeholder="Item Quantity" onChange={obj => pickQty(obj.target.value)} value={pqty} />
                <input type="text" placeholder="Item Photo" onChange={obj => pickPhoto(obj.target.value)} value={pphoto} />
                <input type="text" placeholder="Item Details" onChange={obj => pickDetails(obj.target.value)} value={pdetails} />

                <button onClick={Save}>Save</button>

            </p>
            <p align="center">{message}</p>

            {
                itemlist.map((item, index) => {
                    return (
                        <div key={index} className="product">
                            <h4>{item.name}</h4>
                            <img src={item.photo} height="70" width="120" />
                            <p>Rs.{item.price}</p>
                            <p>Quantity:{item.qty}</p>
                            <p>{item.details}</p>
                            <button onClick={Deleteitem.bind(this, item.id, item.name)}>Delete</button>
                            <p><Link to={`/hook15/${item.id}`}>Edit Item</Link></p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default HookTwelve;