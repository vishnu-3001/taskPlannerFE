import { useState } from "react"
import classes from "./descriptionEditable.module.css"
export default function DescriptionEditable({value,onValueChange,name}){
    const [edit,setEdit] = useState(false);
    function handleEdit(event){
        event.preventDefault();
        setEdit(!edit);
    }
    return(
        <div className={classes.descriptionContainer}>
            <p className={classes.label}>Description</p>
            {!edit&&
            <div>
                <p>{value}</p> 
                <button onClick={handleEdit}>Edit</button>
            </div>
            }
            {
                edit&&
                <div className={classes.editDescriptionContainer}>
                    <textarea 
                        value={value} 
                        name={name} 
                        onChange={onValueChange}
                        autoFocus
                        rows="4"
                        cols="50"
                    />
                    <button type="button" onClick={handleEdit}>Done</button>
                </div>
            }
        </div>
    )
}