import { useState } from "react";

const HookTwo = () => {
    const [itemlist, updateItem] = useState(["Onion", "Potato", "Milk", "Rice", "Apple"]);
    const [newitem, pickItem] = useState("Banana");
    const [message,updateMessage] = useState("")
    const save = () => {
        updateItem(itemlist => [...itemlist, newitem]);
        updateMessage("Item Added Successfully___!");
    }

    const deleteitem = (index) => {     
        itemlist.splice(index, 1);  // a-b
        updateItem(itemlist => [...itemlist]);  //a=a
        updateMessage(alert("Item Deleted Successfully"))
    }
    return (
        <div align="center">
            <h1>Total Items:-{itemlist.length}</h1>
            <p>{message}</p>
            <p>Enter New Item Name:-<input type="text" onChange={obj => pickItem(obj.target.value)} /></p>
            <p><button onClick={save}>Save Item</button></p>
            <p>{newitem}</p>
            <table cellPadding="15">
                <thead>
                    <tr>
                        <th>Item Index</th>
                        <th>Item Name</th>
                        <th>Item Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.map((name, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{name}</td>
                                    <td><button onClick={deleteitem.bind(this, index)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )

};

export default HookTwo;