import { useState } from "react";
import classes from "./Tooltip.module.css"
export default function Tooltip({text}){
    const[visible,setVisible]=useState(false);
    return(
        <div 
        className={classes.toolTipContainer}
        onMouseEnter={()=>setVisible(true)} 
        onMouseLeave={()=>setVisible(false)}>
            {visible&&(
                <div className={classes.tooltipPosition}>
                    {text}
                </div>
            )}
        </div>
    )
}