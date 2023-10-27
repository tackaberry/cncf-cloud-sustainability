import React from "react";

export default ({children, color}) => {
    return (
        <span style={{color:color}}>
            {children}
        </span>
    )
}