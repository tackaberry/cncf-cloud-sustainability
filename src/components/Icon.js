import React from "react";
import "./google-symbols.css";

export default ({name}) => {
    return (
        <span style={{fontSize:"120%", verticalAlign:"text-bottom"}} className={`google-symbols`}>
            {name}
        </span>
    )
}