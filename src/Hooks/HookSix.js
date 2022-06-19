import { useState } from "react";


const HookSix = () => {
    const [itemlist, updateItem] = useState([]);
    const getItem = () => {
       fetch("item.json")
       .then(response=>response.json())
       .then(itemArray=>updateItem(itemArray))
    }

    const [userlist,updateUser] = useState([]);

    const getUser =()=>{
        fetch("user.json")
        .then(response=>response.json())
        .then(userArray=>updateUser(userArray))
    }
    return (
        <div align="center">

            <h2>React API, useState(), Fetch(), then() Example</h2>
            <button onClick={getItem}>Show Item</button>
            <h1>Total Items:- {itemlist.length}</h1>

            {
                itemlist.map((name,index)=>{
                    return(
                        <p key={index} className="myitem">{name}</p>
                    )

                })
            }

            <h1>Total Users:-{userlist.length}</h1>
            <button onClick={getUser}>Show User</button>

            {
                userlist.map((info,index)=>{
                    return(
                        <div key={index} className="myitem">

                        <p>{info.Name}</p>
                        <p>{info.Age}</p>
                        <p>{info.Gender}</p>

                        </div>
                    )

                })
            }
        </div>
    )
}

export default HookSix;