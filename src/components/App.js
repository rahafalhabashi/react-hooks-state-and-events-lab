import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setisDarkMode] = useState(false)
  const appClass = isDarkMode ? "App dark" : "App light"

  function handleDarkMode() {
    setisDarkMode(!isDarkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}> {isDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;



// import React, {useState} from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const [toggle, setToggle] = useState(false)
 

//   function handleDarkMode() {
//     setToggle = ((toggle) => toggle(true))
//   }

//   return (
//     <div className={ useState(false ? "App dark" : "App light")}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkMode(setToggle(!toggle))}>Dark Mode</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;
