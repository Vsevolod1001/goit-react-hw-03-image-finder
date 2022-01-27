import React from "react";
import { Watch  } from "react-loader-spinner";

const Loader = () => {
    return (
        <Watch 
        heigth="100"
        width="100"
        color="#5e3a7a"        
        ariaLabel="loading-indicator"
      />
    );
}
export default Loader