import React from "react";

import './text-block.scss'

const TextBlock = ({ title, content, sub=null }) => {

    return <div className="text-block">
       <h2 className="text-title">{title}</h2>
       {(sub !== null) &&
            <h3 className="text-sub">{sub}</h3>
        }
       <p className="text-content">{content}</p>
    </div>
}

export default TextBlock