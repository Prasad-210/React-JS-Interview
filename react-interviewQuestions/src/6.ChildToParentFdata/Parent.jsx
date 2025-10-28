// import React, { useState } from 'react'
// import Child from './Child'

// const Parent = () => {

//     const [dataFromChild, setDataFromChild] = useState("");

//     const handleDataFromChild = (data) =>{
//         setDataFromChild(data)
//     }

//   return (
//     <div>
//         Parent
//         <Child handleDataFromChild={handleDataFromChild}/>
//         <p>Data Recieved: {dataFromChild}</p>

//     </div>
//   )
// }

// export default Parent

import React, { useState } from "react";
import Child from './Child'

const Parent = () => {

    const [dataFromChild, setDataFromChild] = useState("");

    const handleDataFromChild = (data)=>{
       setDataFromChild(data) 
    }

  return (
    <div>
      {" "}
      <h3>I am Parent</h3>
      <Child handleDataFromChild={handleDataFromChild}/>


      Child Data : {dataFromChild}
    </div>
  );
};

export default Parent;
