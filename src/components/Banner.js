import React from "react";

const Banner = ({title, subtitle, children}) => {
    return (
       <>
            <article className="banner">
                <h1>{title}</h1>
                <div></div>
                <p>{subtitle}</p>
                {children}
            </article>
       </> 
    )
}

export default Banner;