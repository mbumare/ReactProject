import React from "react";

const booklist = [
    { Name: "Java", Price: 100, Qty: 6 },
    { Name: "PHP", Price: 200, Qty: 12 },
    { Name: "HTML", Price: 250, Qty: 7 },
    { Name: "REACT", Price: 350, Qty: 8 },
    { Name: "JS", Price: 450, Qty: 5 },
    { Name: "CSS", Price: 650, Qty: 10 },
    { Name: "PYTHON", Price: 350, Qty: 5 }
]

const MyBook = () => {
    return (
        <div>
            <table border="solid 2px" cellPadding={15}>
                <thead>
                    <tr>
                        <th>Book Id</th>
                        <th>Book Name</th>
                        <th>Book Qty</th>
                        <th>Book Price/ Unit</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       booklist.map((info,index)=>{
                           return(
                               <tr align="center" key={index}>
                                   <td>{index}</td>
                                   <td>{info.Name}</td>
                                   <td>{info.Price}</td>
                                   <td>{info.Qty}</td>
                               </tr>
                           )

                       })
                   }
                </tbody>
            </table>
        </div>
    )
}

export default MyBook;