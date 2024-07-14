import React from 'react'

export const Navbar = () => {
  return (
   <>
   <header> 
     <div className="nav-bar">  
        <div className="brand">E-card</div>
        <div className="search-bar"> 
            <input type="text" placeholder='Search Product' />
        </div> 
        <div className="card">Card</div>
     </div>  

     <div className="nav-bar-wrapper"> 
      <div className="items">Filter by {"->"}</div>
      <div className="items">No Filter</div>
      <div className="items">Mobiles</div>
      <div className="items">Tablets</div>
      <div className="items"> {">="} 29999</div>
      <div className="items"> {">="} 59999</div>
      <div className="items"> {">="} 89999</div>
      <div className="items"> {">="} 69999</div>
      
     </div>

     </header> 
   </>
  )
} 

export default Navbar;
