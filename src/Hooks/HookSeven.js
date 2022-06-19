import { useState, useEffect } from "react";

const HookSeven = () => {

    const [userlist, updateUser] = useState([]);
    const getUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(useArray => {
                updateUser(useArray)
            })
    }

    useEffect(() => {
        getUser();
    },[1])

    return (
        <div>
            <h1 align="center">React useState() , useEffect() Fetch() API Example </h1>
            <p align="center">Total User Array:-{userlist.length}</p>

            <table>
                <thead>
                    <tr align="center">
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone No</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userlist.map((userinfo, index) => {
                            return (
                                <tr key={index} align="center">
                                    <td>{userinfo.id}</td>
                                    <td>{userinfo.name}</td>
                                    <td>{userinfo.username}</td>
                                    <td>{userinfo.email}</td>
                                    <td>{userinfo.address.street}</td>
                                    <td>{userinfo.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default HookSeven;