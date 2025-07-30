import { useState } from "react";
import classes from "./DatesEditable.module.css"
export default function DatesEditable({label,value,onValueChange,name}){
        const[edit,setEdit]=useState(false);
        function handleEdit(event){
            event.preventDefault();
            setEdit(!edit);
        }
    return(
        <div className={classes.dateContainer}>
            <p>{label}</p>
            {!edit &&            
                <div className={classes.dateNoEditContainer}>
                    <p>{value}</p>
                    <button onClick={handleEdit}>edit</button>
                </div>
            }
            {
                edit && 
                <div className={classes.dateEditContainer}>
                    <input 
                        type="date" 
                        value={value} 
                        name={name}
                        onChange={onValueChange}
                    />
                    <button onClick={handleEdit}>done</button>
                </div>
            }
        </div>
    )
}