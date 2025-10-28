function CusModal({handleClose, handleOfferAccept}) {
 
    const handleOuterClick = (e) => {
      console.log(e.target.className)//modal

      if(e.target.className === 'modal')
      handleClose()
    }
 
    return (
    <div className="modal" onClick={handleOuterClick}>
      <div className="modal-content">
        
        <button className="close-btn" onClick={handleClose}>X</button>
        <div className="content">
          Click this butoon below to accept our amazing offer !!
        </div>
        <button  onClick = {handleOfferAccept} className="accept-btn">Accept Offer</button> 
      </div>
    </div>
  );
}

export default CusModal;
