import React from 'react'

function Pagination({pageNo, setPageNo}) {

    const prevThreeArr = Array.from({length:3},(_, index)=> pageNo - 1 - index).filter((value)=> value > 0).reverse();
    const nextFourArr = Array.from({length:4},(_, index)=> pageNo + index);

    const paginationArr = [...prevThreeArr, ...nextFourArr]

   const handleNextClick = () =>{
    setPageNo(pageNo + 1 )
   }
   const handlePrevClick = () =>{
    setPageNo(pageNo - 1 )
   }

  return (
    <div className='pagination-container'>

        {
            pageNo > 1 ?  <div className='page-btn' onClick={handlePrevClick}>{"<"}</div> : ""
        }
     
     {
        paginationArr.map((value, idx)=>{
            return <div onClick={()=>setPageNo(value)} className={ value === pageNo ? 'page-btn active' : 'page-btn'}>{value}</div>
        })
     }
      
      <div className='page-btn' onClick={handleNextClick}>{">"}</div>
    </div>
  )
}

export default Pagination