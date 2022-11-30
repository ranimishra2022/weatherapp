import React from 'react';
import '../style/Style.css';
const Search = ({city, changeHandler, clickhandler})=>{
    return(<>
    
   <div className="heading"> <h2>Find Weather of your city</h2></div>
   <div className="input-box"> <input type="text" placeholder="Enter cityname" value={city} onChange={(event)=>{changeHandler(event)}}/>
   {/* <button onClick={(event)=>{clickhandler(event)}}>search</button> */}
   </div>

    </>)
}
export default Search;