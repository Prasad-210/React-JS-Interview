import React, { useEffect, useState } from "react";

const CarouselControll = ({ items,  autoPlay = true, interval = 3000 }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrev = () =>{
       setCurrentIndex((prev)=>( prev === 0 ? items.length -1 : prev - 1)) 
    }

    const goNext = () =>{
        setCurrentIndex((prev)=>( prev === items.length - 1 ? 0 : prev + 1))
    }

     // Autoplay effect

     useEffect(()=>{
       if(!autoPlay) return;

       const timer = setInterval(()=>{
        goNext()
       }, interval)


       return ()=> clearInterval(timer)
     },[currentIndex, interval,autoPlay])

  return (
    <div
      style={{
        width: "600px",
        margin: "20px auto",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      {items.map((item, index) => (
        <div key={index}
        style={{
            display: index === currentIndex ? 'block': 'none',
            textAlign: 'center'
        }}
        
        >

          <img src={item.image} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}

      {/* ---- Controls ---- */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={goPrev} style={{ marginRight: "10px"}}>Prev</button>
        <button onClick={goNext}>Next</button>
      </div>

            {/* ---- Indicators ---- */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {items.map((_, index) => (
          <span
            key={index}
            onClick={() => selectSlide(index)}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              margin: "5px",
              borderRadius: "50%",
              background: currentIndex === index ? "black" : "lightgray",
              cursor: "pointer",
            }}
          />
        ))}
      </div>


    </div>
  );
};

export default CarouselControll;
