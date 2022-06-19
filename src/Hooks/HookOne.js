import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";


const HookOne = () => {

   //const citylist = ["Banglore","Mumbai","Pune","Chennai"]; 
   //const [Banglore,abc,Pune,Chennai] = citylist; // variable holding the value of citylist.

   //console.log(useState());
   //  const[abcx,xyz]=useState();   //[undefined.f()]

   const [counter, setcounter] = useState(10);
   const [click, setClick] = useState(0)

   const [myclass, updateColor] = useState("myred");

   const colorOne = () => {
      updateColor("myred");
   }

   const colorTwo = () => {
      updateColor("mygreen")
   }

   const one = () => {
      setcounter(counter + 5);
      setClick(click + 1);
   }
   const two = () => {
      setcounter(counter - 5);
      setClick(click - 1);
   }

   const [booklist, updateBook] = useState(["PHP", "JAVA", "CSS", "NODE", "ANGULAR", "REACT"])


   return (
      //  <div>
      //     <h1>Array Destructuring </h1>
      //     <p>{citylist[2]}</p>
      //     <p>{Pune}</p>
      //     <p>{Chennai}</p>
      //     <p>{abc}{Banglore}</p>
      //  </div>
      <div align="center">
         <h1>React useState() Simple Example</h1>
         <h2>The Counter Values is :{counter}</h2>
         <p> Total Click:{click} </p>
         <button onClick={one}>Click Me to + By 5</button>
         <button onClick={two}>Click Me to - By 5</button>


         <h3>Total Books:{booklist.length}</h3>
         {
            booklist.map((name, index) => {
               return (
                  <p key={index}>{name}</p>
               )
            })
         }
         <button onClick={colorOne}>Red</button>
         <button onClick={colorTwo}>Green</button>
         <p className={myclass}>Hello How are You?</p>
      </div>
   )
}

export default HookOne;