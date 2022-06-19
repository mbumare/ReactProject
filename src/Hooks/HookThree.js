import { useState } from "react";


const HookThree = () => {
    var temp = { name: "Apple", price: 300, qty: 5 }
    const [itemlist, updateItem] = useState([temp])
    const [bookname, pickName] = useState("");
    const [bookprice, pickPrice] = useState("");
    const [bookqty, pickQty] = useState("");
    const [massage, updateMessage] = useState("");

    const Save = () => {
        var temp = { name: bookname, price: bookprice, qty: bookqty };
        updateItem(itemlist => [...itemlist, temp]);
        updateMessage(bookname + " Added Successfully !");
        pickName("");
        pickPrice("");
        pickQty("");
    }  

    const DeleteItem = (index,name)=>{
        itemlist.splice(index,1);
        updateItem(itemlist=>[...itemlist]);
        updateMessage(name + " Deleted Successfully")
    }
    return (
        <div align="center">
            <h1> {massage}</h1>
            <table align="left" cellPadding="10">
                <tbody>
                    <tr>
                        <td>Item Name</td>
                        <td><input type="text" onChange={obj => pickName(obj.target.value)} value={bookname}/></td>
                    </tr>
                    <tr>
                        <td>Item Price</td>
                        <td><input type="text" onChange={obj => pickPrice(obj.target.value)} value={bookprice} /></td>
                    </tr>
                    <tr>
                        <td>Item Quantity</td>
                        <td><input type="text" onChange={obj => pickQty(obj.target.value)} value={bookqty} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                            <button onClick={Save}>Save Item</button>
                        </td>

                    </tr>
                </tbody>
            </table>

            <table cellPadding="10" >

                <thead>
                    <tr>
                        <th>Item Index</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.map((item, index) => {
                            return (
                                <tr key={index}>

                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td><button onClick={DeleteItem.bind(this,index,item.name)}>Delete</button></td>

                                </tr>
                            )

                        })
                    }
                </tbody>

            </table>
         
            

        </div>
    )
}

export default HookThree;