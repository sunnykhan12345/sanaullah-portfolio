import { headers } from "next/headers";
import React from "react";
import PropTypes from "prop-types";
const blurBloob = ({position,size}) => {
    // Destartcur position and size
    const{top,left}=position
    const{width,height}=size
  return <div className="absolute"
   style={{
     top: top,
     left:left,
     width:width,
     height:height,
     transform:'translate(-50%, -50%)',
     }}>

  <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blub"></div>
     </div>;
};
// define props types
blurBloob.prototype ={
    position:PropTypes.shape({
        top:PropTypes.string,
        left:PropTypes.string
    }),
    size:PropTypes.shape({
        with:PropTypes.string,
        height:PropTypes.string,

    })

}
export default blurBloob;
