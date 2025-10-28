// import React from 'react'

// const Child = ({handleDataFromChild}) => {

//     const handleEventChange = (e) => {
//         handleDataFromChild(e.target.value)
//     }
//   return (
//     <div>
//         <h1> I am Child Component</h1>
//         <input
//         type='text'
//         placeholder='give ur input here'
//         onChange={handleEventChange}
//         />
//     </div>
//   )
// }

// export default Child

import React from "react";

const Child = ({handleDataFromChild}) => {

    const handleEventChange = (e) =>{
        handleDataFromChild(e.target.value)
    }


  return (
    <div>
      <h3>I am Child</h3>
      <input
      type="text"
      placeholder="hhh"
      onChange={handleEventChange}
      />
    </div>
  );
};

export default Child;
