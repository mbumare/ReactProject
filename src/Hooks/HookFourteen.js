import React from "react";
import { useParams, Link } from 'react-router-dom';

const HookFourteen = () => {

    const { userid, name, edu } = useParams() // It is used to recive query string value from url

    return (
        <div>
            <table align="center" cellPadding="15">
                <thead>
                    <tr>
                        <th>
                            <p><Link to="/hook14/1/Mahesh/MCA">Mahesh</Link></p>
                            <p><Link to="/hook14/2/Ganesh/Ma">Ganesh</Link></p>
                        </th>
                        <th>
                            <h1 align="center">Full Name-{name}</h1>
                            <h2 align="center">Education :-{edu} </h2>
                            <h3 align="center">User Id:-{userid}</h3>
                        </th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}

export default HookFourteen;