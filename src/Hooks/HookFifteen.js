import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const HookFifteen = () => {
    const { pid } = useParams();
    const [pname, pickName] = useState("");
    const [pprice, pickPrice] = useState("");
    const [pqty, pickQty] = useState("");
    const [pphoto, pickPhoto] = useState("")
    const [pdetails, pickDetails] = useState("");
    const [message, updateMessage] = useState("");

    const getInfo = () => {
        var url = "http://localhost:1234/itemlist/" + pid;
        fetch(url)
            .then(response => response.json())
            .then(itemInfo => {
                pickName(itemInfo.name);
                pickPrice(itemInfo.price)
                pickQty(itemInfo.qty);
                pickPhoto(itemInfo.photo);
                pickDetails(itemInfo.details);
            })
    }

    useEffect(() => {
        getInfo();
    }, [1]);

    const Save = () =>{
        var url = "http://localhost:1234/itemlist/"+pid;
        var itemdata ={
            
                "name": pname,
                "price": pprice,
                "qty": pqty,
                "details":pdetails,
                "photo": pphoto
                 
              
        }
        axios.put(url,itemdata)
        .then(response=>{
            updateMessage(pname + " Updated Successfully___!")
        })

    }

    return (
        <div align="center">

            <h1> Edit Items:- {pid}</h1>
            <p align="center"> <Link to="/hook12">Go Back</Link> </p>
            <p align="center">{message}</p>
            <table align="left" cellPadding="10" bgcolor="orange" border="30">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <td><input type="text" value={pname} onChange={obj => pickName(obj.target.value)} /></td>
                    </tr>
                    <tr>
                        <th>Item Price</th>
                        <td><input type="text" value={pprice} onChange={obj => pickPrice(obj.target.value)} /></td>
                    </tr>
                    <tr>
                        <th>Item qty</th>
                        <td><input type="text" value={pqty} onChange={obj => pickQty(obj.target.value)} /></td>
                    </tr>
                    <tr>
                        <th>Item photo</th>
                        <td><input type="text" value={pphoto} onChange={obj => pickPhoto(obj.target.value)} /></td>
                    </tr>
                    <tr>
                        <th>Item details</th>
                        <td><input type="text" value={pdetails} onChange={obj => pickDetails(obj.target.value)} /></td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <button onClick={Save}>Update Item</button>
                        </th>
                    </tr>
                </thead>

            </table>
            <table align="center" cellPadding="10" border="30">
               <thead>
                <tr>
                    <td>{pname}</td>
                </tr>
                <tr>
                    <td>{pprice}</td>
                </tr>
                <tr>
                    <td>{pqty}</td>
                </tr>
                <tr>
                    <td>{pphoto}</td>
                </tr>
                <tr>
                    <td>{pdetails}</td>
                </tr>
               </thead>
            </table>
        </div>
    );
};

export default HookFifteen;