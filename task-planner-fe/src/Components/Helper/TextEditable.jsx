import { useState } from "react";
import classes from "./textEditable.module.css"
export default function TextEditable({value,onValueChange,name}){
    const[edit,setEdit]=useState(false);
    function handleEdit(event){
        event.preventDefault();
        setEdit(!edit);
    }

    return(
        <div className={classes.textEditableContainer}>
            {!edit && <div onClick={handleEdit}
             className={classes.text}
             >{value}</div>}

            {edit && 
                <div>
                    <input type="text"
                    value={value}
                    name={name}
                    onChange={onValueChange}
                    autoFocus onBlur={()=>{setEdit(false)}}
                    className={classes.textInput} />
                </div>
            }
        </div>
    )
}